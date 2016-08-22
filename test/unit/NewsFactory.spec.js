describe("NewsFactory", function() {
  beforeEach(module("newsApp"))

  var story

  beforeEach(inject(function(NewsFactory) {
    story = new NewsFactory("NewsStory1", "url")
  }))

 it("initialises with a url", function() {
   expect(story.url).toEqual("url")
 })
})
