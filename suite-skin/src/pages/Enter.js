import React from "react";
import CustomDiv from "../components/CustomDiv";
import { Col, Row, Container } from "../components/Grid";
import "./css/stylesheets.css"
import NavigationBar from "../components/NavigationBar";

const Enter = () => {
    return (
        <Container fluid className="page">
            <NavigationBar />
            <div id="bggggg2">
            <Row>
                <Col size="md-4" />
                <Col size="md-8">
                    <CustomDiv id="banner">
                        <h1>Suite Skin by Lindsey</h1>
                    </CustomDiv>
                </Col>

            </Row>

            <Row>
                <Col size="md-7"></Col>
                <Col size="md-2"></Col>
                <Col size="md-3"></Col>
            </Row>

            <Row>
                <Col size="md-4" />
                <Col size="md-8">
                    <CustomDiv id="homediv">

                        <p><img src="https://github.com/shelkelly/SuiteSkin/blob/main/suite-skin/src/images/ssbl.png?raw=true" id="plantpic" class="center" alt="Suite Skin by Lindsey Logo"></img></p>

                        <p>Welcome to Suite Skin!</p>
                        <p>Here, results are our primary objective. Whether holistic or more rigorous, the products we offer will fit any of your needs. Products are selected based on healthy and necessary ingredients, but not at the cost of results.</p>
                        <p>When you come to Suite Skin, you receive more than skin care. You gain knowledge. Knowledge on how the skin works, how diet and hormones affect the skin and so much more. When you come to see Lindsey, you will be set up with an entire system to achieve your aesthetic goals.</p>

                        <p>
                        <a href="https://www.facebook.com/suiteskinbylindsey"><img src="https://github.com/shelkelly/SuiteSkin/blob/main/suite-skin/src/images/socialmedia/iconfinder_Aquicon-Facebook_249180.png?raw=true" alt="Facebook" id="socmed" /></a>
                        <a href=""><img src="https://github.com/shelkelly/SuiteSkin/blob/main/suite-skin/src/images/socialmedia/iconfinder_Email_408057.png?raw=true" alt="Email" id="socmed" /></a>
                        <a href="https://www.instagram.com/suiteskinbylindsey/"><img src="https://github.com/shelkelly/SuiteSkin/blob/main/suite-skin/src/images/socialmedia/iconfinder_Aquicon-Instagram_249200.png?raw=true" alt="Instagram" id="socmed" /></a>
                        </p>
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
        </Container>
    );
};

export default Enter;