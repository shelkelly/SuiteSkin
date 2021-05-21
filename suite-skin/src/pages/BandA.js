import React from "react";
import CustomDiv from "../components/CustomDiv";
import { Col, Row, Container } from "../components/Grid";
import "./css/stylesheets.css"
import NavigationBar from "../components/NavigationBar";
import Carousel from "../components/Carousel";



const BandA = () => {
    return (
        <Container fluid>
            <NavigationBar />
            <div id="bggggg3">
                <Row>
                    <Col size="md-4" />
                    <Col size="md-8">
                        <CustomDiv id="banner">
                            <h1>Suite Skin by Lindsey</h1>
                        </CustomDiv>
                    </Col>

                </Row>
                <Row>
                    <Col size="md-4" />
                    <Col size="md-8">
                        <CustomDiv id="baamaindiv">
                            <h2>Before and After Photos</h2>
                            <p><Carousel /></p>
                        </CustomDiv>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <div class="footer">
                            C Suite Skin by Lindsey
                    </div>
                    </Col>
                </Row>
            </div>
        </Container >
    );
};

export default BandA;