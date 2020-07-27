/**
 * Ali_Mongi-CAPSTONE_SEARCH_API-L2T21
 * @SearchResults.js - key component that processes search media from App.js and
 *                     creates labels and values,as well as store searchin history
 */
import React, { Component } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import ResultCard from "./ResultCard";

let item1Label = "";
let item2Label = "";
let item3Label = "";
let item4Label = "";
let item5Label = "";
let item6Label = "";
let item7Label = "Genre: ";
let showItem1 = "none";
let showItem2 = "none";
let showItem3 = "none";
let showItem4 = "none";
let showItem5 = "none";
let showItem6 = "none";
let showItem7 = "flex";
let showItem8 = "flex";
let trackItem1,
  collectionItem2,
  ratingItem3,
  softwareItem4,
  genresItem5,
  priceItem6,
  primaryGenreItem7,
  collectionPriceItem8 = "";
let pushCounter = -1;

class SearchResults extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeResults: [],
      resultSuccess: "",
      resultFail: "",
      pushCount: -1,
    };
  }

  componentWillMount() {
    const { searchTerm, kindSelected, media, message } = this.props;

    if (message === "failure") {
      this.setState({
        resultFail: (
          <h1 class="resultFail">
            search_for: [${searchTerm}] ||| <hr></hr>status: [sorry, we couldn't
            find any results for this query...]
          </h1>
        ),
      });
    }
    if (message === "successful") {
      this.setState({
        resultSuccess: `search_for: [${searchTerm}] ||| status: [delivered!]`,
      });

      for (var index = 0; index < media.length; index++) {
        const {
          kind,
          artistName,
          artworkUrl100,
          collectionName,
          trackName,
          collectionPrice,
          primaryGenreName,
          contentAdvisoryRating,
          minimumOsVersion,
          genres,
          price,
        } = media[index];

        let artworkUrl = artworkUrl100.replace(/100x100/g, "1000x1000");

        this.assignResultLabels(kind);
        this.populateLabelsAndValues(
          collectionName,
          trackName,
          collectionPrice,
          primaryGenreName,
          contentAdvisoryRating,
          minimumOsVersion,
          genres,
          price
        );

        let audioKind = kind;
        if (kindSelected === "audiobook") {
          audioKind = media[index].wrapperType;
        }
        if (
          kindSelected === kind ||
          kindSelected === audioKind ||
          kindSelected === "all"
        ) {
          pushCounter++;

          const card = (
            <ResultCard
              artistName={artistName}
              artworkUrl={artworkUrl}
              item1={trackItem1}
              item2={collectionItem2}
              item3={ratingItem3}
              item4={softwareItem4}
              item5={genresItem5}
              item6={priceItem6}
              item7={primaryGenreItem7}
              item8={collectionPriceItem8}
              showItem1={showItem1}
              showItem2={showItem2}
              showItem3={showItem3}
              showItem4={showItem4}
              showItem5={showItem5}
              showItem6={showItem6}
              showItem7={showItem7}
              showItem8={showItem8}
              pushCount={pushCounter}
              handleAddFavorite={this.props.handleAddFavorite}
              resultsHistory={this.props.resultsHistory}
            />
          );

          const favoriteBtn = (
            <i
              as={Link}
              to="/search"
              class="fas fa-star fa-1x resultsCardStarIcon"
              id={pushCounter}
              onClick={this.props.handleAddFavorite}
            />
          );

          const finalCard = (
            <Col xs={3}>
              {card}
              {favoriteBtn}
            </Col>
          );

          this.state.activeResults.push(finalCard);
          this.props.resultsHistory.push(card);
        }
      }
    }

    this.clearDefaults();
  }

  assignResultLabels(kind) {
    switch (kind) {
      case "song":
        item1Label = "Track: ";
        showItem1 = "flex";
        item2Label = "Album: ";
        showItem2 = "flex";
        break;
      case "music-video":
        item1Label = "Video: ";
        showItem1 = "flex";
        break;
      case "feature-movie":
        item1Label = "Movie: ";
        showItem1 = "flex";
        item2Label = "Movie Family: ";
        showItem2 = "flex";
        item3Label = "Rating: ";
        showItem3 = "flex";
        break;
      case "tv-episode":
        item1Label = "TV Show: ";
        showItem1 = "flex";
        item2Label = "Season: ";
        showItem2 = "flex";
        item3Label = "Rating: ";
        showItem3 = "flex";
        break;
      case "podcast":
        item1Label = "Podcast: ";
        showItem1 = "flex";
        break;
      case "software":
        item1Label = "Software Title: ";
        showItem1 = "flex";
        item4Label = "OS Version (minimum): ";
        showItem4 = "flex";
        item6Label = "S/W Price: ";
        showItem6 = "flex";
        showItem7 = "none";
        showItem8 = "none";
        break;
      case "ebook":
        item1Label = "eBook Name: ";
        showItem1 = "flex";
        item5Label = "eBook Genre: ";
        showItem5 = "flex";
        item6Label = "eBook Price: ";
        showItem6 = "flex";
        showItem7 = "none";
        showItem8 = "none";
        break;
      default:
    }
  }

  populateLabelsAndValues(
    collectionName,
    trackName,
    collectionPrice,
    primaryGenreName,
    contentAdvisoryRating,
    minimumOsVersion,
    genres,
    price
  ) {
    trackItem1 = (
      <div className="resultsCardItem">
        <h6>{item1Label}</h6>
        <h5>{trackName}</h5>
      </div>
    );
    collectionItem2 = (
      <div className="resultsCardItem">
        <h6>{item2Label}</h6>
        <h5>{collectionName}</h5>
      </div>
    );
    ratingItem3 = (
      <div className="resultsCardItem">
        <h6>{item3Label}</h6>
        <h5>{contentAdvisoryRating}</h5>
      </div>
    );
    softwareItem4 = (
      <div className="resultsCardItem">
        <h6>{item4Label}</h6>
        <h5>{minimumOsVersion}</h5>
      </div>
    );
    genresItem5 = (
      <div className="resultsCardItem">
        <h6>{item5Label}</h6>
        <h5>{genres}</h5>
      </div>
    );
    priceItem6 = (
      <div className="resultsCardItem" style={{ color: "darkred" }}>
        <h6>{item6Label}</h6>
        <h5>${price}</h5>
      </div>
    );
    primaryGenreItem7 = (
      <div className="resultsCardItem">
        <h6>{item7Label}</h6>
        <h5>{primaryGenreName}</h5>
      </div>
    );
    collectionPriceItem8 = (
      <div className="resultsCardItem" style={{ color: "darkred" }}>
        ${collectionPrice}
      </div>
    );
  }

  clearDefaults() {
    item1Label = "";
    item2Label = "";
    item3Label = "";
    item4Label = "";
    item5Label = "";
    item6Label = "";
    item7Label = "Genre: ";
    showItem1 = "none";
    showItem2 = "none";
    showItem3 = "none";
    showItem4 = "none";
    showItem5 = "none";
    showItem6 = "none";
    showItem7 = "flex";
    showItem8 = "flex";
  }

  render() {
    const { resultSuccess, resultFail, activeResults } = this.state;
    return (
      <Col xs={9}>
        <Container>
          <Alert variant="dark" className="resultAlert">
            {resultSuccess}
          </Alert>
          {resultFail}
          <Row className="searchResults"> {activeResults}</Row>
        </Container>
      </Col>
    );
  }
}

export default SearchResults;
