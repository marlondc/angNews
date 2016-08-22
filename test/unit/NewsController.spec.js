describe("NewsController", function() {

  beforeEach(module("newsApp"))

  var ctrl, NewsFactory, httpBackend
  var newsData = [{headline: "NewsStory1", url: "url"}, {headline: "NewsStory2", url:"url"}]

  beforeEach(inject(function($httpBackend, $controller, _NewsFactory_) {
    ctrl = $controller("NewsController"),
    NewsFactory = _NewsFactory_
    httpBackend = $httpBackend

    httpBackend.expectGET("https://content.guardianapis.com/search?api-key=b6e2b7b6-d468-408a-a65c-7f2d086c7e17").respond(newsData)
    httpBackend.flush()
  }))

  it("initialises with several stories", function() {
    var story1 = new NewsFactory("NewsStory1", "url")
    var story2 = new NewsFactory("NewsStory2", "url")
    expect(ctrl.stories).toEqual([story1, story2])
  })

})
