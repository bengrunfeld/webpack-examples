# Using the Webpack Dev Server

Webpack offers a dev server that will immediately re-transpile and bundle your code every time it detects a change. It will also allow you to view your project at a local url like `localhost:3000`.

## Running this example

To run this example, 

* run `npm install` to install the dependencies from `package.json`
* run `webpack` to bundle all the necessary code into `dist`

## Check the result

Once you've run the `webpack` command with no errors:

* `home.bundle.js`, `blog.bundle.js` and `commons.bundle.js` should have been created in the `dist` directory
* Navigate to `localhost:3000/home.html` and you should see "This be my homies page"
* Navigate to `localhost:3000/blog.html` and you should see some funny blog post messages.

If you can't see the above results, open the console and look for errors, because the build somehow failed.