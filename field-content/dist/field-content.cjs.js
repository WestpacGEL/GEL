"use strict";
// this file might look strange and you might be wondering what it's for
// it's lets you import your source files by importing this entrypoint
// as you would import it if it was built with preconstruct build
// this file is slightly different to some others though
// it has a require hook which compiles your code with Babel
// this means that you don't have to set up @babel/register or anything like that
// but you can still require this module and it'll be compiled

// this bit of code imports the require hook and registers it
let unregister = require("/Users/mike/Development/GEL/node_modules/@preconstruct/hook/dist/hook.cjs.js").___internalHook("/Users/mike/Development/GEL");

// this re-exports the source file
module.exports = require("/Users/mike/Development/GEL/field-content/src/index.js");

// this unregisters the require hook so that any modules required after this one
// aren't compiled with the require hook in case you have some other require hook
// or something that should be used on other modules
unregister();
