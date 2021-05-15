import React from "react";
import CustomDiv from "../components/CustomDiv";
import { Col, Row, Container } from "../components/Grid";
import "./css/stylesheets.css"
import NavigationBar from "../components/NavigationBar";
import Home from "./Home";

const Enter = () => {
    return (
        <Container fluid className="page">
            <NavigationBar />
            <Row>
                <Col size="md-4"/>
                <Col size="md-8">
                    <CustomDiv id="banner">
                        <h1>Suite Skin by Lindsey</h1>
                    </CustomDiv>
                </Col>

            </Row>
            <p></p><img src="https://image.freepik.com/free-vector/watercolor-jojoba-plant-illustration_23-2148850683.jpg" id="plantpic" class="center"></img>
            <Row>
                <Col size="md-4" />
                <Col size="md-8">
                    <CustomDiv id="homediv">
                        
                        
                        <p></p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare nibh dui, eget iaculis tortor viverra eget. Maecenas vel augue risus. Etiam porttitor magna risus, a consectetur turpis lacinia quis. Phasellus bibendum, mauris quis faucibus ornare, nulla turpis vulputate elit, lacinia tristique nibh neque a turpis. Sed semper elit ipsum, malesuada ultrices elit pharetra at. Nulla interdum dolor in placerat ornare. Duis quis sem sagittis, tempor turpis vel, hendrerit elit. Donec pulvinar molestie ligula, quis dictum ex mattis ut. Mauris mollis sit amet elit at laoreet. Vestibulum consectetur justo vitae ante gravida congue. Quisque porttitor mauris vel augue varius vestibulum. Duis sollicitudin, odio nec commodo fermentum, eros metus mollis quam, mattis pellentesque arcu lorem quis lacus.


<p></p>Sed magna lacus, aliquet non augue id, sagittis ultrices nulla. Mauris non rutrum dolor, ut aliquam quam. Integer a scelerisque sem, vitae aliquam massa. Sed pretium suscipit augue, eu commodo enim congue non. Pellentesque justo nulla, hendrerit a porta id, rhoncus ac mi. Cras fringilla dui venenatis nulla consectetur porta. Nulla eros nisi, rutrum non pulvinar faucibus, posuere vitae leo. Sed risus lorem, accumsan id augue eu, blandit dignissim nisl. Proin quis est congue, dapibus arcu ut, maximus nisi. Aliquam posuere porta tincidunt.

<p></p>Nulla ac porttitor neque. Proin id dolor dolor. Praesent ac sapien feugiat, commodo sem ac, posuere urna. Etiam in tellus ultricies, dignissim libero vitae, bibendum diam. Quisque accumsan, neque eu lobortis eleifend, libero justo dictum leo, non elementum dolor sapien sed erat. Sed ac tincidunt diam, a aliquet odio. Morbi quis dapibus justo. Donec rhoncus arcu magna, et tempor nisi dapibus nec. Quisque a lacinia neque, et interdum arcu.
            </CustomDiv>
                </Col>

            </Row>
        </Container>
    );
};

export default Enter;