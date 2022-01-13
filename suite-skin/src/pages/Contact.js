import React from "react";
import CustomDiv from "../components/CustomDiv";
import { Col, Row, Container } from "../components/Grid";
import "./css/stylesheets.css"
import NavigationBar from "../components/NavigationBar";

const Contact = () => {
    return (
        <Container fluid>
            <NavigationBar />
            <div id="bggggg6">
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
                        <CustomDiv id="contactmaindiv">
                            <Row>
                                <Col size="md-12">
                                    <h2>Contact</h2>
                                    <p><b>Located in:</b> Carolinas HealthCare System Blue Ridge Morganton</p>
                                    <p><b>Address:</b> 2209 S Sterling St, Suite 400, Morganton, NC 28655</p>
                                    <p><b>Phone:</b> (828) 764-5087</p>
                                </Col>
                            </Row>

                            <Row>
                                <Col size="md-6">
                                    <h3>About your Esthetician</h3>
                                    <p><img src="https://github.com/shelkelly/SuiteSkin/blob/main/suite-skin/src/images/linhen.png?raw=true" class="linhenpic"></img>Lindsey Henderson has joined the location of Women's Health - Morganton. Lindsey is a graduate of Lurlenn B. Wallace Community College in Opp, Alabama, where she received extensive education about the skin and esthetics. She started her career in a medspa where she was trained and certified in more advanced treatments.</p>
                                    <p>In addition to offering facials and waxing, Lindsey is also trained and certified in microdermabrasion, dermaplaning, chemical peels, lash lifting, tinting and has advanced acne education.</p>
                                </Col>

                                <Col size="md-6">
                                    <h3>Hours</h3>
                                    <p><b>Monday:</b> 9am - 5pm </p>
                                    <p><b>Tuesday:</b> 9am - 5pm </p>
                                    <p><b>Wednesday:</b> 9am - 5pm </p>
                                    <p><b>Thursday:</b> 9am - 5pm </p>
                                    <p><b>Friday:</b> 9am - 5pm </p>
                                    <p><b>Saturday:</b> Closed </p>
                                    <p><b>Sunday:</b> Closed</p>
                                    <p><b>Unable to accept walk-ins at this time.</b></p>
                                </Col>
                            </Row>

                            <Row>
                                <Col size="md-12">
                                    <a href="https://www.facebook.com/suiteskinbylindsey"><img src="https://github.com/shelkelly/SuiteSkin/blob/main/suite-skin/src/images/socialmedia/iconfinder_Aquicon-Facebook_249180.png?raw=true" alt="Facebook" id="socmed" /></a>
                                    <a href=""><img src="https://github.com/shelkelly/SuiteSkin/blob/main/suite-skin/src/images/socialmedia/iconfinder_Email_408057.png?raw=true" alt="Email" id="socmed" /></a>
                                    <a href="https://www.instagram.com/suiteskinbylindsey/"><img src="https://github.com/shelkelly/SuiteSkin/blob/main/suite-skin/src/images/socialmedia/iconfinder_Aquicon-Instagram_249200.png?raw=true" alt="Instagram" id="socmed" /></a>
                                </Col>
                            </Row>

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

export default Contact;