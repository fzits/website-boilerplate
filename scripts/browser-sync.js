const browserSync = require("browser-sync");

browserSync({
    proxy: 'localhost:19100',
    files: [
        "./web/html/css/**/*.css"
    ]
});
