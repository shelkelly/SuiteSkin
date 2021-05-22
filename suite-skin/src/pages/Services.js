import React from "react";
import CustomDiv from "../components/CustomDiv";
import { Col, Row, Container } from "../components/Grid";
import "./css/stylesheets.css"
import NavigationBar from "../components/NavigationBar";
import Home from "./Home";

const Services = () => {
    return (
        <Container fluid>
            <NavigationBar />
            <div id="bggggg4">
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
                    <CustomDiv id="servicesmaindiv">
                        <h2>Services</h2>
                        <CustomDiv id="treatments">
                            <ul>
                                <li>Acne Consultation</li>
                                <li>Acne Treatment</li>
                                <li>Alpha/Beta Peel</li>
                                <li>Back Facial</li>
                                <li>Basic Facial</li>
                                <li>Chocolate and Champagne Facial</li>
                                <li>Custom Facial</li>
                                <li>Eminence Facial Peel</li>
                                <li>High Frequency</li>
                                <li>Lactic Peel</li>
                                <li>Mandeliclear and Vitamin A Boost</li>
                                <li>Microdermabrasion</li>
                                <li>Microdermabrasion + Enzyme/Mask</li>
                                <li>Oxygen Treatment</li>
                                <li>Switch Follow Up Enzyme</li>
                                <li>Switch Treatment</li>
                            </ul>
                        </CustomDiv>
                        <CustomDiv id="wax">
                            <ul>
                                <li>Arm Wax</li>
                                <li>Back Wax</li>
                                <li>Bikini Wax</li>
                                <li>Brazilian Wax</li>
                                <li>Brazilian Maintenance</li>
                                <li>Brow and Lip Wax</li>
                                <li>Brow Shaping</li>
                                <li>Brow Wax Cleanup</li>
                                <li>Brow Wax and Tint</li>
                                <li>Chin Wax</li>
                                <li>Lip Wax</li>
                                <li>Full Face Wax</li>
                                <li>Full Leg Wax</li>
                                <li>Half Leg Wax</li>
                                <li>Under Arm Wax</li>
                            </ul>
                        </CustomDiv>
                        <CustomDiv id="lashes">
                            <ul>
                                <li>Lash Lift</li>
                                <li>Lash Tint</li>
                                <li>Lash Lift and Tint</li>
                                <li>Brow Tint</li>
                            </ul>
                        </CustomDiv>
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

export default Services;