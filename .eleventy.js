// const { DateTime } = require("luxon");
// const lazyImagesPlugin = require('eleventy-plugin-lazyimages');
// Import fast-glob package
const fg = require("fast-glob");

const bookImages = fg.sync(["**/library/*", "!**/_site"]);

module.exports = function(eleventyConfig) {
    // lazy loading on hold - need work around for responsive images/unknown height
    // eleventyConfig.addPlugin(lazyImagesPlugin);

    // does not seem to be working
    // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
    // eleventyConfig.addFilter('htmlDateString', (dateObj) => {
    //     return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat('yyyy-LL-dd');
    // });
    
    // Find and copy any `jpg` files, maintaining directory structure.
    eleventyConfig.addPassthroughCopy("library/*.jpg");
    eleventyConfig.addCollection("library", function(collection) {
    return bookImages;
  });
    return {
        templateFormats: [
            "jpg",
            "md",
            "css" // css is not yet a recognized template extension in Eleventy
        ]
    };
};


