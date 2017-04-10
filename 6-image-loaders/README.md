# Using SASS Loaders

By using `url-loader`, we can have Webpack create direct URL's to image assets, thus reducing HTTP calls which can slow our app down.

## Running this example

To run this example, 

* run `npm install` to install the dependencies from `package.json`
* run `webpack` to bundle all the necessary code into `dist`

## Check the result

Once you've run the `webpack` command with no errors:

* `main.bundle.js` should have been created in the `dist` directory
* Navigate to `index.html` in your browser, and you should see the text, "Loading images with Webpack", and it should be styled properly.
* An image of a Pirate Mona Lisa should be visible on the page.

If you can't see that text, open the console and look for errors, because the build somehow failed