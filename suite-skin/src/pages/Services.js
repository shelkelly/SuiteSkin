import React from "react";
import CustomDiv from "../components/CustomDiv";
import { Col, Row, Container } from "../components/Grid";
import "./css/stylesheets.css"
import NavigationBar from "../components/NavigationBar";

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
                                <h3>Treatments</h3>

                                <div class="left">

                                    <ul>
                                        <li>Acne Consultation.......$50.00</li>
                                        <li>Acne Treatment......$75.00</li>
                                        <li>Alpha/Beta Peel......$90.00</li>
                                        <li>Back Facial..............$70.00</li>
                                        <li>Basic Facial.............$85.00</li>
                                        <li>Chocolate and Champagne Facial........$110.00</li>
                                        <li>Custom Facial.........$100.00</li>
                                        <li>Eminence Facial Peel........$120.00</li>
                                        <li>High Frequency.......$15.00</li>
                                        <li>Lactic Peel.........$90.00</li>
                                        <li>Mandeliclear and Vitamin A Boost....$100.00</li>
                                        <li>Microdermabrasion.............$90.00</li>
                                        <li>Microdermabrasion + Enzyme/Mask.....$120.00</li>
                                        <li>Oxygen Treatment............$90.00</li>
                                        <li>Switch Follow Up Enzyme..........$0.00</li>
                                        <li>Switch Treatment........$200.00</li>
                                    </ul>

                                </div>

                            </CustomDiv>

                            <CustomDiv id="wax">
                                <h3>Waxing</h3>
                                <ul>
                                    <li>Arm Wax........$40.00</li>
                                    <li>Back Wax.........$50.00+</li>
                                    <li>Bikini Wax........$35.00</li>
                                    <li>Brazilian Wax........$60.00</li>
                                    <li>Brazilian Maintenance.....$50.00</li>
                                    <li>Brow and Lip Wax.......$20.00</li>
                                    <li>Brow Shaping.......$20.00</li>
                                    <li>Brow Wax Cleanup....$15.00+</li>
                                    <li>Brow Wax and Tint.....$25.00</li>
                                    <li>Chin Wax.......$10.00</li>
                                    <li>Lip Wax........$10.00</li>
                                    <li>Full Face Wax.......$45.00+</li>
                                    <li>Full Leg Wax.......$60.00</li>
                                    <li>Half Leg Wax.......$40.00</li>
                                    <li>Under Arm Wax.......$30.00</li>
                                </ul>
                            </CustomDiv>
                            <CustomDiv id="lashes">
                                <h3>Lashes</h3>
                                <ul>
                                    <li>Lash Lift......$75.00</li>
                                    <li>Lash Tint.......$20.00</li>
                                    <li>Lash Lift and Tint.....$90.00</li>
                                    <li>Brow Tint.......$15.00</li>
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