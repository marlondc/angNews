describe("NewsService", function() {
  beforeEach(module(newsApp))

  var NewsService, httpBackend
  var newsData = [{headline: "NewsStory1", url: "url"}, {headline: "NewsStory2", url:"url"}]

  beforeEach(inject(function(_NewsService_, _NewsFactory_, $httpBackend) {
    NewsService = _NewsService_
    NewsFactory = _NewsFactory_
    httpBackend = $httpBackend
  }))

  it("fetches a list of news stories", function() {
    httpBackend.expectGET("https://content.guardianapis.com/search?api-key=b6e2b7b6-d468-408a-a65c-7f2d086c7e17").respond(newsData)
    var story1 = new NewsFactory("NewsStory1", "url")
    var story2 = new NewsFactory("NewsStory2", "url")
    NewsService.getAll().then(function(stories) {
      expect(stories).toEqual([story1, story2])
    })
    httpBackend.flush()
  })
})
