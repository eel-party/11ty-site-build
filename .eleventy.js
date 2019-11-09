module.exports = function(eleventyConfig) {
    // Aliases are in relation to the _includes folder
    // eleventyConfig.addLayoutAlias('booklist', 'layouts/booklist.liquid');
    // eleventyConfig.addLayoutAlias('layout', 'layouts/layout.liquid');
    // eleventyConfig.addLayoutAlias('pagelayout', 'layouts/pagelayout.liquid');
    // eleventyConfig.addLayoutAlias('pagelist', 'layouts/pagelist.liquid');

    // Find and copy any `jpg` files, maintaining directory structure.
    eleventyConfig.addPassthroughCopy("library/_img/*.jpg");

    
  // Get the first `n` elements of a collection.
  eleventyConfig.addFilter("head", (array, n) => {
    if( n < 0 ) {
      return array.slice(n);
    }

    return array.slice(0, n);
  });


    eleventyConfig.addCollection("tagList", require("./_11ty/getTagList"));
    // eleventyConfig.addCollection("library", function(collection) {
    // return bookImages;
    // });
    return {
        templateFormats: [
            "jpg",
            "md",
            "css" // css is not yet a recognized template extension in Eleventy
        ]
    };
};

