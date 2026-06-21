module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("currentYear", () => new Date().getFullYear());
  eleventyConfig.addPassthroughCopy("src/assets");

  eleventyConfig.addWatchTarget("./src/css/");
  eleventyConfig.addPassthroughCopy({
    "./src/css/input.css": "css/style.css"
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_includes/layouts",
    },
    templateFormats: ["njk", "html", "md"],
    htmlTemplateEngine: "njk",
  };
};
