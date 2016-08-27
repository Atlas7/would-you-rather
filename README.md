
# npm run options

## 

Start a webserver at localhost:8080, and serves `app/index.html` and `app/index.js` files to browser (for agile dev).

```
npm run start
```

## stage

Spit out the Webpack-bundled `dist/index.html` and "non-minified" `dist/index_bundle.js` (for ease of studying bundle file).

```
npm run stage
```

## production

Spit out the Webpack-bundled `dist/index.html` and "minified" `dist/index_bundle.js` (for performance).

```
npm run production
```