import webpack from 'webpack'
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'dist'),
  images: path.join(__dirname, 'app/images'),
  node_modules: path.join(__dirname, 'node_modules'),
}

const LAUNCH_COMMAND = process.env.npm_lifecycle_event
process.env.BABEL_ENV = LAUNCH_COMMAND

const isProduction = LAUNCH_COMMAND === 'production'


// Problem: index.html is located in app folder. the WebPack transpiled index.js is located in the dist folder
//          how to make app/index.html reference dist/index.js ?
// Solution: a way so that whenever webpack runs, our app/index.html gets copied over to /dist/index.html
//           followed by injecting script tag to reference dist/index.js
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',   // input template
  filename: 'index.html',                    // output filename at the output path (see base config below)
  inject: 'body'
})

// minify code in production mode
const productionPlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production')
  }
})

// the WebPack base config - to be shared with Dev and Production mode
const base = {
  // Webpack needs to know the starting point of your application, or your root JavaScript file.
  entry: [
    PATHS.app,
  ],
  // Webpack needs to know to which location it should save the new transformed code.
  output: {
    path: PATHS.build,
    filename: "index_bundle.js"
  },
  // Webpack needs to know which transformations to make on your code.
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: PATHS.node_modules,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        loader: 'style!css?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        include: PATHS.images,
        loader: 'file?name=[name]__[hash:base64:5].[ext]'
      },
    ]
  },

  // (Optional)
  // make ./app the root directory for ease of importing files.
  // e.g. so instead of...
  //  import { HelloWorld } from '../../components'
  // we can do...
  //  import { HelloWorld } from 'components'
  resolve: {
    root: path.resolve('./app')
  },

}

// Development specific Webpack config
const developmentConfig = {
  devtool: 'cheap-module-inline-source-map',
  devServer: {
    contentBase: PATHS.build,
    hot: true,
    inline: true,
    progress: true
  },
  plugins: [
    HTMLWebpackPluginConfig,
    new webpack.HotModuleReplacementPlugin()
  ]
}

// Production Specific Webpack config
const productionConfig = {
  devtool: 'cheap-module-source-map',
  plugins: [HTMLWebpackPluginConfig, productionPlugin]
}

// Merge Base and development / production config depending on npm run start/production
export default Object.assign({}, base,
  isProduction === true? productionConfig : developmentConfig
)
