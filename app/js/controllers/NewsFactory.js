newsApp.factory("NewsFactory", function() {
  var Story = function(headline, url) {
    this.headline = headline
    this.url = url
  }

  Story.prototype.readStory = function(story_length) {
    var URI = "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url="
    var readRequest = new XMLHttpRequest()
    readRequest.open("GET", encodeURI(URI + this.url))
    readRequest.onreadystatechange = function(response) {
      if (readRequest.readyState === 4){
        if (story_length == "summary") { var json = JSON.parse(readRequest.response).sentences }
        if (story_length == "full") { var json = JSON.parse(readRequest.response).text }
        document.getElementById("story_text").innerHTML = json
      }
    }
    readRequest.send();
  }

  return Story
})
