newsApp.service("NewsService", ["$http", "NewsFactory", function($http, NewsFactory) {
  this.getAll = function() {
    return $http.get("https://content.guardianapis.com/search?api-key=b6e2b7b6-d468-408a-a65c-7f2d086c7e17")
    .then(_handleResponseFromApi_)
  }

  function _handleResponseFromApi_ (response) {
    return response.data.response.results.map(function(data) {
      return new NewsFactory(data.webTitle, data.webUrl)
    })
  }

}])
