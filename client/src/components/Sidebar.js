/**
 * Ali_Mongi-CAPSTONE_SEARCH_API-L2T21
 * @Sidebar.js - component that generates side navigation links and contains a child component for data and cmd inputs
 */
import React from "react";
import { Container, Nav, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";

const Sidebar = (props) => {
  return (
    <Col xs={3}>
      <Nav
        defaultActiveKey="/home"
        className="flex-column col-md-12 d-none d-md-block"
      >
        <Container fluid>
          <div class="sidebar">
            <Nav.Link as={Link} to="/search">
              <i class="fas fa-2x fa-search sidebarSearchIcon"></i>
            </Nav.Link>
            <hr></hr>
            <Nav.Link>
              <SearchInput
                categoryLabel={props.categoryLabel}
                searchTerm={props.searchTerm}
                searchIsLoaded={props.searchIsLoaded}
                handleSearchChange={props.handleSearchChange}
                handleCategoryChange={props.handleCategoryChange}
                handleSearch={props.handleSearch}
                handleClearSearch={props.handleClearSearch}
              />
            </Nav.Link>
            <hr></hr>
            <Nav.Link as={Link} to="/favorites">
              <i class="fas fa-2x fa-star sidebarStarIcon"></i>
            </Nav.Link>
          </div>
        </Container>
      </Nav>
    </Col>
  );
};

export default Sidebar;
