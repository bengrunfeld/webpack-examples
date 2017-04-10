# Using the Babel Loader to Transpile from ES6 to ES5 Javasript

Webpack loaders load and perform transformations on files. Typically use cases for loaders are JSX and ES6. JSX isn't supported natively in browsers, and not all features of ES6 are supported across all browsers, so both need to be transpiled into plain vanilla Javascript in order for them to run smoothly. We use loaders for this.

In most cases, we use Babel (`babel-loader`) to perform this transpilation step.

## Running this example

To run this example, 

* run `npm install` to install the dependencies from `package.json`
* run `webpack` to bundle all the necessary code into `dist/main.bundle.js`

## Check the result

Once you've run the `webpack` command with no errors:

* `main.bundle.js` should have been created in the `dist` directory
* Navigate to `index.html` in your browser, and you should see the text, "Transpiling with the Webpack Babel Loader"
* If you can't see that text, open the console and look for errors, because the build somehow failed

Notice that the `dist` directory was created and that `main.bundle.js` was placed inside of there.