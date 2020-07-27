/**
 * Ali_Mongi-CAPSTONE_SEARCH_API-L2T21
 * @Api.test.js - tests for backend functionality
 */
let expect = require("chai").expect;
let httpRequest = require("request");
let request = require("supertest");
const app = require("../app");
const search = require("../routes/search");

console.log("*********************{THE API TESTS}************************");

let term = "trump"; // search term e.g.
// search categories
let categories = [
  "song",
  "musicVideo",
  "podcast",
  "audiobook",
  "ebook",
  "software",
  "movie",
  "tvEpisode",
  "all",
];

describe("SEARCH_ROUTER", function () {
  let category = "song";
  let expectedUrl = search.itunesLoadUrl(term, category);

  describe("___test: url formation", function () {
    it("generates the appropriate search url type 1", function (done) {
      expect(expectedUrl).to.equal(
        `https://itunes.apple.com/search?term=${term}&entity=${category}&limit=32`
      );
      done();
    });

    let category2 = "all";
    let expectedUrl2 = search.itunesLoadUrl(term, category2);
    it("generates the appropriate search url type 2", function (done) {
      expect(expectedUrl2).to.equal(
        `https://itunes.apple.com/search?term=${term}`
      );
      done();
    });
  });
});

describe("HTTP CONNECTIONS", function () {
  describe("___test for home page load", function () {
    it("resolves landing page url request", function (done) {
      httpRequest(`http://localhost:3000/`, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(response).to.have.property("body");
        done();
      });
    });
  });

  describe("___test for search  page load", function () {
    for (var i = 0; i < categories.length; i++) {
      it(`resolves search url request for category: ${categories[i]}`, async (done) => {
        return await request(app)
          .get(`/search/${categories[i]}/${term}`)
          .expect("Content-Type", /json/)
          .then(
            (response) => {
              expect(response.statusCode).to.equal(200);
              expect(response).to.have.property("body");
              //expect(response.body.message).to.equal("successful");
            },
            (error) => {
              console.log(error);
            },
            done()
          );
      });
    }
  });
});
