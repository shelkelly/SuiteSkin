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

                        <p><img src="https://github.com/shelkelly/SuiteSkin/blob/main/suite-skin/src/images/ssbl.png?raw=true" id="plantpic" class="center"></img></p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare nibh dui, eget iaculis tortor viverra eget. Maecenas vel augue risus. Etiam porttitor magna risus, a consectetur turpis lacinia quis. Phasellus bibendum, mauris quis faucibus ornare, nulla turpis vulputate elit, lacinia tristique nibh neque a turpis. Sed semper elit ipsum, malesuada ultrices elit pharetra at. Nulla interdum dolor in placerat ornare. Duis quis sem sagittis, tempor turpis vel, hendrerit elit. Donec pulvinar molestie ligula, quis dictum ex mattis ut. Mauris mollis sit amet elit at laoreet. Vestibulum consectetur justo vitae ante gravida congue. Quisque porttitor mauris vel augue varius vestibulum. Duis sollicitudin, odio nec commodo fermentum, eros metus mollis quam, mattis pellentesque arcu lorem quis lacus.</p>

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