import React from "react";
import CustomDiv from "../components/CustomDiv";
import { Col, Row, Container } from "../components/Grid";
import "./css/stylesheets.css";

const Home = () => {
  return (
    <Container fluid>
      <Row>
          <Col size="md-2" />
        <Col size="md-8">
          <CustomDiv id="landing">
              <h1>Suite Skin by Lindsey</h1>
          </CustomDiv>
          <p><a href="/Enter"><button type="button" id="enterbtn">Enter</button></a></p>

        </Col>
        <Col size="md-2" />
        </Row>
    </Container>
  );
};

export default Home;