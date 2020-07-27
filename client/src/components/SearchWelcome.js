/**
 * Ali_Mongi-CAPSTONE_SEARCH_API-L2T21
 * @SearchWelcome.js - component that welcomes a user with search instructions
 */
import React from "react";
import { Col, Alert } from "react-bootstrap";

const SearchWelcome = (props) => {
  return (
    <Col xs={9}>
      <div className="searchWelcome">
        <Alert variant="dark">
          <h1>[ New Search Awaits ]</h1>
          <ul>
            <li>Use the side-bar on your left to search.</li>
            <li>Filter your search to a specific category.</li>
            <li>Favorite items by clicking on the star icons.</li>
            <li>Access favorites from the big star on the sidebar.</li>
            <li>
              Thanks for visiting <i>Apple Adam's API </i> :)
            </li>
          </ul>
        </Alert>
      </div>
    </Col>
  );
};

export default SearchWelcome;
