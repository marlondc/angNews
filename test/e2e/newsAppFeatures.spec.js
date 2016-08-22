var mock = require('protractor-http-mock');

beforeEach(function(){
  mock([{
    request: {
      path: 'http://quiet-beach-24792.herokuapp.com/todos.json',
      method: 'GET'
    },
    response: {
      data: [{text: "ToDo1", completed: true}, {text: "ToDo2", completed: false}]
    }
  }]);
});

describe("app", function() {
  it("should have a title of News", function() {
    browser.get("/")
    expect(browser.getTitle()).toEqual("News")
  })
})

describe("app", function() {
  it("has a news story", function() {
    browser.get("/")
    var newsStory = $$("#stories p")
    expect(newsStory.first().getText()).toEqual("NewsStory1")
  })
})

describe("app", function() {
  it("has several stories", function() {
    browser.get("/")
    var stories = $$("#stories p")
    expect(stories.first().getText()).toEqual("NewsStory1")
    expect(stories.last().getText()).toEqual("NewsStory2")
  })
})

afterEach(function(){
  mock.teardown();
});
