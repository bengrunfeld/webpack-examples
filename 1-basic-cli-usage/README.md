# Webpack Basic CLI Usage

Webpack can be run from the CLI, taking an entry point and and output file as arguments. E.g.

    webpack entry.js main.bundle.js

In the above command, all the code that is required in your Node files is bundled into `main.bundle.js`.

## Running this example

To run this example, 

* run `npm install` to install the dependencies from `package.json`, namely `webpack` and `jquery`.
* run `webpack entry.js main.bundle.js` to bundle all the necessary code into `main.bundle.js`

## Check the result

Once you've run the `webpack` command with no errors:

* `main.bundle.js` should have been created in the project directory
* Navigate to `index.html` in your browser, and you should see
Once you've successfully run the `webpack` command, navigate to `index.html` in your browser, and you should see the text, "Welcome to Webpack", "Hello World" there.
* If you can't see "Hello World" on the page, open the console and look for errors, because the build somehow failed
