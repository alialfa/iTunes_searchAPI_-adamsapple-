/**
 * Ali_Mongi-CAPSTONE_SEARCH_API-L2T21
 * @SearchBuffer.js - component that displays a gif image while the user awaits an initiated search
 */
import React from "react";
import { Image, Col } from "react-bootstrap";
import buffer from "../assets/images/buffer2.gif";

const SearchBuffer = (props) => {
  return (
    <Col xs={9}>
      <div className="searchBuffer">
        <Image src={buffer} roundedCircle style={{ width: "400px" }} />
      </div>
    </Col>
  );
};

export default SearchBuffer;
