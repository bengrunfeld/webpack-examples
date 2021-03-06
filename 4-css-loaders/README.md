# Using CSS Loaders

When you load CSS as a module in your code, Webpack will only bundle the styles that your app uses. To do this, you need to `require` the CSS file in your JS code.

## Running this example

To run this example, 

* run `npm install` to install the dependencies from `package.json`
* run `webpack` to bundle all the necessary code into `dist/main.bundle.js`

## Check the result

Once you've run the `webpack` command with no errors:

* `main.bundle.js` should have been created in the `dist` directory
* Navigate to `index.html` in your browser, and you should see the text, "Loading CSS with Webpack"
* If you can't see that text, open the console and look for errors, because the build somehow failed