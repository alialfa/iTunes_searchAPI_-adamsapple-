/**
 * Ali_Mongi-CAPSTONE_SEARCH_API-L2T21
 * @ResultCard.js - component that binds values returns a card based on search results props
 */
import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const ResultCard = (props) => {
  const {
    item1,
    item2,
    item3,
    item4,
    item5,
    item6,
    item7,
    item8,
    showItem1,
    showItem2,
    showItem3,
    showItem4,
    showItem5,
    showItem6,
    showItem7,
    showItem8,
    artworkUrl,
    artistName,
  } = props;

  return (
    <Card className="resultsCard">
      <Card.Img variant="top" src={artworkUrl} />
      <Card.Body>
        <Card.Title class="resultsCardTitle">
          <i>
            <h5>{artistName}</h5>
          </i>
        </Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem style={{ display: showItem1 }}>{item1}</ListGroupItem>
        <ListGroupItem style={{ display: showItem2 }}>{item2}</ListGroupItem>
        <ListGroupItem style={{ display: showItem3 }}>{item3}</ListGroupItem>
        <ListGroupItem style={{ display: showItem4 }}>{item4}</ListGroupItem>
        <ListGroupItem style={{ display: showItem5 }}>{item5}</ListGroupItem>
        <ListGroupItem style={{ display: showItem6 }}>{item6}</ListGroupItem>
        <ListGroupItem style={{ display: showItem7 }}>{item7}</ListGroupItem>
        <ListGroupItem style={{ display: showItem8 }}>{item8}</ListGroupItem>
      </ListGroup>
    </Card>
  );
};

export default ResultCard;
