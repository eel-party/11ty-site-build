const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
    // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
    eleventyConfig.addFilter('htmlDateString', (dateObj) => {
        return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat('yyyy-LL-dd');
    });
    // Find and copy any `jpg` files, maintaining directory structure.
    eleventyConfig.addPassthroughCopy("*.jpg");
    return {
        templateFormats: [
            "md",
            "css" // css is not yet a recognized template extension in Eleventy
        ]
    };
};