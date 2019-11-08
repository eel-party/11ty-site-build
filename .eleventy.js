module.exports = function(eleventyConfig) {
    // lazy loading on hold - need work around for responsive images/unknown height
    // eleventyConfig.addPlugin(lazyImagesPlugin);
    // module.exports = function({collections}) {
    //   return `<ul>
    // ${collections.page.map((page) => `<li>${ page.data.title }</li>`).join("\n")}
    // </ul>`;
    // };
    // eleventyConfig.addCollection('custom', function(collection) {
    //   return collection
    //     .getAll()
    //     .filter(item => ['page', 'book'].includes(item.tag))
    // });
            // module.exports = function({ collections }) {
    //     return `<ul>
    //     ${collections.page.map((page) => `<li>${ page.data.tags }</li>`).join("\n")}
    //     </ul>`;
    // };

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

