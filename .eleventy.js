module.exports = function(eleventyConfig) {
    
    eleventyConfig.addNunjucksFilter("tagFilter", function(value,tag) {
        return value.filter(item => {
            const tags = item.data.tags;
            console.log(tags,tag)
            return tags && tags.includes(tag);
        });
    });

    eleventyConfig.addNunjucksFilter("strExclude", function(value,str) {
        return value.filter(v=>v!==str);
    })
  };