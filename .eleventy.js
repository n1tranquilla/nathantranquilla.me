module.exports = function(eleventyConfig) {
    
    eleventyConfig.addNunjucksFilter("tagFilter", function(value,tag) {
        return value.filter(item => {
            const tags = item.data.tags;
            return tags && tags.includes(tag);
        });
    });

    eleventyConfig.addNunjucksFilter("tagExclude", function(value,tag) {
        return value.filter(t=>t!==tag);
    });

    eleventyConfig.addNunjucksFilter("strExclude", function(value,str) {
        return value.filter(v=>v!==str);
    })
  };