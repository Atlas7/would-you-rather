*Note: this personal project is in "work in progress" mode.*

# Intro

This is a personal project - to build a ReactJS Single Page Web Application, using the [ReactJS Program Redux-Immutable Curriculum](https://github.com/ReactjsProgram/Redux-Immutable-Curriculum) as a baseline starting point.

- **Aim**: master web app development skill, be creative, and apply newly found tricks from the internet as the project goes.

- **Development Tools**: ReactJS, WebPack, ES6+, Immutable, Babel, File loaders (e.g. CSS and Images), Redux, etc.

- **Test Tools**: Mocha, Chai, and "chai-immutable" - for Test Driven Development (TDD) - particular handy for writing Redux reducers and complex logic.

# Development Instruction

First of all, git clone this repository.

```
git clone https://github.com/Atlas7/would-you-rather.git
```


NPM install dependencies:

```
npm install
```

Start a webserver at localhost:8080 (that serves the bundled version `app/index.html` and `app/index.js` files to the web browser)

```
npm run start
```

Note that the bundle files are produced "in memory" - no physical files will be created.

# Spit out physical bundle files

By running either one of the `npm run` options below, a folder `dist` is created with the WebPack bundled files created there. 

It is ok to run `npm run production` (that creates the `dist` folder and files), delete `dist` folder, and re-run, etc. for experimenting purposes.

## npm run stage (non-minified)

Create the `dist` folder, and spit out the **non-minified** files there - good for educational purpose (as you get to see the bundle file in non-minified form), but not fit for production deployment.

```
npm run stage
```

## npm run production (minified)

Create the `dist` folder, and spit out the **minified** files there - this may be used for production deployment. (additional "configurations" may be required).

```
npm run production
```

# Test Instructions

Mocha and Chai are used in the TDD (Test Driven Development) proccess - inspired by the awesome [Full-stack Redux Tutorial](http://teropa.info/blog/2015/09/10/full-stack-redux-tutorial.html) by [@Teropa](https://github.com/teropa).

Also managed to get `mocha-loader` to work nicely with Webpack (so the test is run against the a Webpack bundle, with test results displayed on browser) - inspired by [this AWESOME Stackoverflow forum](http://stackoverflow.com/questions/32385219/mocha-tests-dont-run-with-webpack-and-mocha-loader).

All tests are stored under the `/test` directory. (naming rule: `xxxx.test.js` - see `tests/index.js` for info).

To run the entire test suite:

```
npm run test
```


Navigate to [http://localhost:8081/](http://localhost:8081/) - you should see test result displayed along side the actual output.


# Get In Touch

I like learning and experimenting with new tools. If this repository has helped you & you'd like to share tips & tricks etc, my twitter is [@jAtlas7](https://twitter.com/jAtlas7).

Cheers,
Johnny