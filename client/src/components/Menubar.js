/**
 * Ali_Mongi-CAPSTONE_SEARCH_API-L2T21
 * @Menubar.js - component that loads header area nav links
 */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

class Menubar extends Component {
  render() {
    return (
      <div>
        <Navbar bg="success" variant="dark" expand="lg" id="headerNavbar">
          <Navbar.Brand as={Link} to="/home">
            <h1 style={{ color: "white" }}>
              &nbsp;{this.props.companyName} <i class="fab fa-apple"></i>
            </h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
              <Nav>
                <Nav.Link as={Link} to="/home">
                  <i class="fas fa-2x fa-home"></i>
                </Nav.Link>
                <Nav.Link as={Link} to="/search">
                  <i class="fas fa-2x fa-search"></i>
                </Nav.Link>
                <Nav.Link as={Link} to="/favorites">
                  <i class="fas fa-2x fa-star"></i>
                </Nav.Link>
              </Nav>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Menubar;
