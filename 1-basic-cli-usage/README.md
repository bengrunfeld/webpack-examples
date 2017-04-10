# Webpack Basic CLI Usage

Webpack can be run from the CLI, taking an entry point and and output file as arguments. E.g.

    webpack entry.js main.bundle.js

In the above command, all the code that is required in your Node files is bundled into `main.bundle.js`.

## Running this example

To run this example, 

* run `npm install` to install the dependencies from `package.json`, namely `webpack` and `jquery`.
* run `webpack entry.js main.bundle.js` to bundle all the necessary code into `main.bundle.js`

