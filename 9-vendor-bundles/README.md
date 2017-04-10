# Creating a Vendor Bundle

We can use the Commons Chunk Plugin to create a bundle of all of our library files. Aka, a vendor bundle. A vendor bundle is basically a bundle of all of our library code (code that we didn't write), but code that we may want to make available to specific pages. E.g. `React`, `ReactDOM`, `jQuery`, etc.


## Running this example

To run this example, 

* run `npm install` to install the dependencies from `package.json`
* run `webpack` to bundle all the necessary code into `dist`

## Check the result

Once you've run the `webpack` command with no errors:

* `home.bundle.js`, `blog.bundle.js` and `commons.bundle.js` should have been created in the `dist` directory
* Navigate to `home.html` and you should see "This be my homies page"
* Navigate to `blog.html` and you should see some funny blog post messages.
* `jQuery` is common to both pages, and all the `jQuery` code should be in the `commons.bundle.js` file, while both `home.bundle.js` and `blog.bundle.js` should be remarkably small, and only contain the code for both those pages.

If you can't see the above results, open the console and look for errors, because the build somehow failed.