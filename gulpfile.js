/**
 * iMAGE MINIFICATION TOOL
 */
const { MINIFY_IMAGES } = require("./scripts/image.min");
const {series}  = require("gulp")


exports.default = series(MINIFY_IMAGES)