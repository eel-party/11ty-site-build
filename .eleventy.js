module.exports = function(eleventyConfig) {
    // Find and copy any `jpg` files, maintaining directory structure.
  eleventyConfig.addPassthroughCopy("*.jpg");
  return {
    templateFormats: [
      "md",
      "css" // css is not yet a recognized template extension in Eleventy
    ]
  };
};
