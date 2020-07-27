/**
 * Ali_Mongi-CAPSTONE_SEARCH_API-L2T21
 * @App.test.js - tests for frontend components
 */
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import renderer from "react-test-renderer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import SearchWelcome from "../components/SearchWelcome";
import SearchResults from "../components/SearchResults";
import resultsSample from "./searchresult.json";

/* test for component 1 */
it("TEST: `HEADER` COMPONENT >>> generates navigation menu as intended (1)", () => {
  const tree = renderer
    .create(
      <Router>
        <Header />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

/* test for component 2 */
it("TEST: `INPUT` COMPONENT >>> it generates a sidebar with an input box + option menu + cmd buttons + welcome area (2)", () => {
  const tree = renderer
    .create(
      <Router>
        <Sidebar categoryLabel="CATEGORY" />
        <SearchWelcome />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

/* test for component 3 */
it("TEST: `SEARCH RESULTS` COMPONENT >>> it auto-generates fictional search results from json array (3)", () => {
  let media = resultsSample.results;
  let resultsHistory = [];
  const tree = renderer
    .create(
      <Router>
        <SearchResults
          searchTerm="Mariah Carey"
          kindSelected="all"
          message="successful"
          media={media}
          resultsHistory={resultsHistory}
        />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
