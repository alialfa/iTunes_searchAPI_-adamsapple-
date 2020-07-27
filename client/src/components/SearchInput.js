/**
 * Ali_Mongi-CAPSTONE_SEARCH_API-L2T21
 * @SearchInput.js - component that accepts input data and criteria for search parameters
 */
import React from "react";
import { Dropdown, DropdownButton, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const SearchInput = (props) => {
  const history = useHistory();
  const routeChange = () => {
    // stores path history based on searches initiated
    let path = `/search/${props.categoryLabel.toLowerCase()}/${
      props.searchTerm
    }`;
    history.push(path);
  };

  return (
    <div className="searchInput">
      <input
        id="inputSearchBox"
        type="text"
        class="form-control"
        placeholder="Search..."
        value={props.searchTerm}
        onKeyDown={(e) => e.stopPropagation(this)}
        onChange={props.handleSearchChange}
        autoComplete="on"
        disabled={props.searchIsLoaded}
      />

      <DropdownButton
        id="inputDropDownCategory"
        onClick={(e) => e.preventDefault()}
        title={props.categoryLabel}
        disabled={props.searchIsLoaded}
      >
        <Dropdown.Item
          id="MUSIC"
          title="song"
          onClick={(e) => {
            props.handleCategoryChange("song", e);
          }}
        >
          MUSIC
        </Dropdown.Item>
        <Dropdown.Item
          id="MUSIC_VIDEO"
          title="musicVideo"
          onClick={(e) => {
            props.handleCategoryChange("music-video", e);
          }}
        >
          MUSIC_VIDEO
        </Dropdown.Item>
        <Dropdown.Item
          id="PODCAST"
          title="podcast"
          onClick={(e) => {
            props.handleCategoryChange("podcast", e);
          }}
        >
          PODCAST
        </Dropdown.Item>
        <Dropdown.Item
          id="AUDIOBOOK"
          title="audiobook"
          onClick={(e) => {
            props.handleCategoryChange("audiobook", e);
          }}
        >
          AUDIOBOOK
        </Dropdown.Item>
        <Dropdown.Item
          id="eBOOK"
          title="ebook"
          onClick={(e) => {
            props.handleCategoryChange("ebook", e);
          }}
        >
          eBOOK
        </Dropdown.Item>
        <Dropdown.Item
          id="SOFTWARE_APP"
          title="software"
          onClick={(e) => {
            props.handleCategoryChange("software", e);
          }}
        >
          SOFTWARE_APP
        </Dropdown.Item>
        <Dropdown.Item
          id="MOVIE"
          title="movie"
          onClick={(e) => {
            props.handleCategoryChange("feature-movie", e);
          }}
        >
          MOVIE
        </Dropdown.Item>
        <Dropdown.Item
          id="TV_SHOW"
          title="tvEpisode"
          onClick={(e) => {
            props.handleCategoryChange("tv-episode", e);
          }}
        >
          TV_SHOW
        </Dropdown.Item>
        <Dropdown.Item
          id="SHORT_FILM"
          title="shortFilm"
          onClick={(e) => {
            props.handleCategoryChange("shortFilm", e);
          }}
        >
          SHORT_FILM
        </Dropdown.Item>
        <Dropdown.Item
          id="ALL"
          title="all"
          onClick={(e) => {
            props.handleCategoryChange("all", e);
          }}
        >
          ALL
        </Dropdown.Item>
      </DropdownButton>

      <div className="inputButtons">
        <Button
          className="buttonSearch"
          variant="success"
          onClick={(e) => {
            routeChange();
            props.handleSearch(e);
          }}
          disabled={props.searchIsLoaded}
        >
          SEARCH
        </Button>
        <Button
          className="buttonSearch"
          variant="secondary"
          onClick={props.handleClearSearch}
          as={Link}
          to="/search"
        >
          CLEAR
        </Button>
      </div>
    </div>
  );
};

export default SearchInput;
