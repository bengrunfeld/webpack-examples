# Code Splitting

Code splitting is the idea of using multiple entry points for better performance optimization. So if someone loads the `contact us` page, they do not receive the code for `about us` as well. They only receive the code that they need to load that page. 

This way, separate bundles are created for different pages. So we will only load the code that we need.

## Running this example

To run this example, 

* run `npm install` to install the dependencies from `package.json`
* run `webpack` to bundle all the necessary code into `dist`

## Check the result

Once you've run the `webpack` command with no errors:

* `home.bundle.js` and `blog.bundle.js` should have been created in the `dist` directory
* Navigate to `home.html` and you should see "This be my homies page"
* Navigate to `blog.html` and you should see some funny blog post messages.

If you can't see the above results, open the console and look for errors, because the build somehow failed.