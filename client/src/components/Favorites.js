/**
 * Ali_Mongi-CAPSTONE_SEARCH_API-L2T21
 * @Favorites.js - component that iterates through a favorites array and renders them effectively
 */
import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Favorites = (props) => {
  let activeFavorites = [];
  props.favorites.map((favoriteCard, index) => {
    return activeFavorites.push(
      <Col xs={3}>
        {favoriteCard}
        <i
          as={Link}
          to="/search"
          class="fas fa-times fa-1x resultsCardStarIcon"
          id={index}
          onClick={props.handleDeleteFavorite}
        />
      </Col>
    );
  });

  return (
    <Col xs={9} className="favorites">
      <Container>
        <Row>
          <h5 class="favoritesTitle">YOUR FAVOURITES:</h5>
        </Row>
        <Row>{activeFavorites}</Row>
      </Container>
    </Col>
  );
};

export default Favorites;
