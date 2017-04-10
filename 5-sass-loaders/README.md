# Using SASS Loaders

We can easily transpile SASS (`*.scss`) to css using Webpack. 

## Running this example

To run this example, 

* run `npm install` to install the dependencies from `package.json`
* run `webpack` to bundle all the necessary code into `dist`

## Check the result

Once you've run the `webpack` command with no errors:

* `main.bundle.js` should have been created in the `dist` directory
* Navigate to `index.html` in your browser, and you should see the text, "Loading SASS with Webpack", and it should be styled properly.
* If you can't see that text, open the console and look for errors, because the build somehow failed