/**
 * Ali_Mongi-CAPSTONE_SEARCH_API-L2T21
 * @Home.js - component that displays a welome message on the Home landing page
 */
import React from "react";
import { Jumbotron, Button } from "react-bootstrap";

const Home = (props) => {
  return (
    <div class="jumbotronWelcome">
      <Jumbotron>
        <h1>Welcome to iApple!</h1>
        <p>
          You're at the home of the largest Apple and iTunes search database on
          the internet!
        </p>
        <p>
          <Button variant="primary" disabled>
            The ADAMS APPLE Family
          </Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Home;
