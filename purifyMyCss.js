
const purify = require("purify-css")


let content = ['*.html']; // Glob pattern to ref all HTML files from root directory.

let css = ['css/**/*.css']; // Glob pattern to ref all CSS files from root directory.

let options = {
    // Will write purified CSS to this file.
    output: './css/main.css', // Output file name
    minified: true, // Minify boolean
    info: true // Output information on how much reduction was achieved
};

purify(content, css, options);