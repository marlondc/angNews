newsApp.factory("NewsFactory", function() {
  var Story = function(headline, url) {
    this.headline = headline
    this.url = url
  }

  Story.prototype.readSummary = function() {
    var URI = "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url="
    var readRequest = new XMLHttpRequest()
    readRequest.open("GET", encodeURI(URI + this.url))
    readRequest.onreadystatechange = function(response) {
      if (readRequest.readyState === 4){
        var json = JSON.parse(readRequest.response).sentences
        document.getElementById("story_text").innerHTML = json
      }
    }
    readRequest.send();
  }




  return Story
})

// function loadStories() {
//   var request = new XMLHttpRequest();
//   request.open('GET', encodeURI('https://content.guardianapis.com/search?api-key=b6e2b7b6-d468-408a-a65c-7f2d086c7e17'));
//   request.onreadystatechange = function(response) {
//     if (request.readyState === 4) {
//       var json = JSON.parse(request.response);
//       var array = json.response.results;
//       for (var i = 0; i < array.length; i++) {
//         storyList.addStory(array[i].webTitle, array[i].webUrl);
//       }
//     list.innerHTML = displayHeadlines(storyList);
//     }
//   };
//   request.send();
// }
