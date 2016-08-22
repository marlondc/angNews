newsApp.factory("NewsFactory", function() {
  var Story = function(headline, url) {
    this.headline = headline
    this.url = url
  }
  return Story
})
