/**
 * Ali_Mongi-CAPSTONE_SEARCH_API-L2T21
 * @App.js - main class for search API
 */
import React, { Component } from "react";
import { Row } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import SearchWelcome from "./components/SearchWelcome";
import SearchBuffer from "./components/SearchBuffer";
import SearchResults from "./components/SearchResults";
import Favorites from "./components/Favorites";

class App extends Component {
  constructor(props) {
    super(props);
    // variable declarations
    this.state = {
      searchTerm: "",
      categoryLabel: "CATEGORY",
      fetchCategory: "",
      kindSelected: "",
      searchIsLoaded: false,
      message: "",
      media: [],
      resultsHistory: [],
      favorites: [],
      favTracker: new Map(),
    };
    // context binding for event listeners
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleClearSearch = this.handleClearSearch.bind(this);
    this.handleAddFavorite = this.handleAddFavorite.bind(this);
    this.handleDeleteFavorite = this.handleDeleteFavorite.bind(this);
  }

  // handler for input text for search term
  handleSearchChange(e) {
    if (e.target.value !== "") {
      this.setState({ searchTerm: e.target.value });
    }
  }

  // handler for search term category
  handleCategoryChange(kindSelection, e) {
    // e.target.id > is used to mark the category dropdown
    // e.taerget.title > is used to fetch() from apple API
    if ((e.target.id !== "") & (e.target.title !== "")) {
      this.setState({
        categoryLabel: e.target.id,
        fetchCategory: e.target.title,
        kindSelected: kindSelection,
      });
    }
  }

  // handler for an initiated search
  async handleSearch(e) {
    const { searchTerm, fetchCategory } = this.state;

    if (searchTerm !== "" && fetchCategory !== "") {
      await fetch(`/search/${fetchCategory}/${searchTerm}`)
        .then((res) => res.json())
        .then(
          (data) => {
            if (data.message === "successful") {
              // api responds with loaded search data
              this.setState({
                searchIsLoaded: true,
                media: data.media.results,
                message: data.message,
              });
            }
            if (data.message === "failure") {
              // api fails to get search data
              this.setState({
                searchIsLoaded: true,
                media: [],
                message: data.message,
              });
            }
          },
          (error) => {
            this.setState({
              searchIsLoaded: true,
              error,
            });
          }
        );
    } else {
      alert("Please complete all search criteria!");
    }
  }

  // handler for clearing search history
  handleClearSearch(e) {
    this.setState({
      searchTerm: "",
      categoryLabel: "CATEGORY",
      fetchCategory: "",
      kindSelected: "",
      searchIsLoaded: false,
      message: "",
      media: [],
    });
  }

  // handler to add a search item to favorites section
  handleAddFavorite(e) {
    e.preventDefault();
    let favoriteAddIndex = e.target.id;
    const { favorites, favTracker, resultsHistory } = this.state;

    if (favTracker.get(favoriteAddIndex) === resultsHistory[favoriteAddIndex]) {
      // if it already exists in favorites
      alert("Already in your favorites!");
      e.preventDefault();
    } else {
      this.setState({
        favorites: [...favorites, resultsHistory[favoriteAddIndex]],
      });
      favTracker.set(favoriteAddIndex, resultsHistory[favoriteAddIndex]);
    }
  }

  // handler to remove an item from favorites
  handleDeleteFavorite(e) {
    e.preventDefault();
    let favoriteDeleteIndex = e.target.id;
    const { favorites } = this.state;

    let dummyArray = [];
    dummyArray = favorites;
    dummyArray.splice(favoriteDeleteIndex, 1);

    this.setState({
      favorites: dummyArray,
    });
  }

  render() {
    const {
      searchTerm,
      categoryLabel,
      kindSelected,
      message,
      media,
      searchIsLoaded,
      resultsHistory,
      favorites,
    } = this.state;

    // represents a sidebar that is used in the search and favorite pages
    const sidebar = (
      <Sidebar
        categoryLabel={categoryLabel}
        searchTerm={searchTerm}
        searchIsLoaded={searchIsLoaded}
        handleSearchChange={this.handleSearchChange}
        handleCategoryChange={this.handleCategoryChange}
        handleSearch={this.handleSearch}
        handleClearSearch={this.handleClearSearch}
      />
    );

    let searchResults = "";
    if (searchIsLoaded === true) {
      // if a search session fails or succeeds,we generate the results area
      searchResults = (
        <SearchResults
          searchTerm={searchTerm}
          kindSelected={kindSelected}
          message={message}
          media={media}
          resultsHistory={resultsHistory}
          handleAddFavorite={this.handleAddFavorite}
        />
      );
    } else {
      // while a search session is buffering, display this
      searchResults = <SearchBuffer />;
    }
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact={true} path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route
            exact
            path={`/search`}
            render={(props) => (
              <Row>
                {sidebar}
                <SearchWelcome />
              </Row>
            )}
          />
          <Route
            exact
            path={`/search/${categoryLabel}/${searchTerm}`}
            render={(props) => (
              <Row>
                {sidebar}
                {searchResults}
              </Row>
            )}
          />
          <Route
            exact
            path="/favorites"
            render={(props) => (
              <div>
                <Row>
                  {sidebar}
                  <Favorites
                    favorites={favorites}
                    handleDeleteFavorite={this.handleDeleteFavorite}
                  />
                </Row>
              </div>
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
