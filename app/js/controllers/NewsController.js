newsApp.controller("NewsController", ["NewsFactory", "NewsService", function(NewsFactory, NewsService) {

  var self = this

  NewsService.getAll().then(function(stories) {
    self.stories = stories
  })
}])
