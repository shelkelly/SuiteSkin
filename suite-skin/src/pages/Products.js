import React from "react";
import CustomDiv from "../components/CustomDiv";
import { Col, Row, Container } from "../components/Grid";
import "./css/stylesheets.css"
import NavigationBar from "../components/NavigationBar";

const Products = () => {
    return (
        <Container fluid>
            <NavigationBar />
            <div id="bggggg5">
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
                    <CustomDiv id="prodmaindiv">
                        <h2>Product Lines</h2>
                        <p><h3>Eminence</h3></p>
                        <p><img src="https://github.com/shelkelly/SuiteSkin/blob/main/suite-skin/src/images/products/eminence.png?raw=true" alt="Eminence" id="product1"></img></p>
                        <p>Eminence Organics is passionate about using the best natural, organic and Biodynamic® ingredients to bring our Customers the healthiest and most effective skin care products.</p>
                        <p></p>

                        <p><h3 id="bumpdown">Circadia</h3></p>
                        <p><img src="https://github.com/shelkelly/SuiteSkin/blob/main/suite-skin/src/images/products/circadia-logo-300x225.png?raw=true" alt="Circadia" id="product2"></img></p>
                        <p>At Circadia, our philosophy of skincare is centered on the body’s circadian rhythms, defending from environmental insult during the day, and stimulating repair mechanisms during sleep. Circadia’s products utilize paraben-free preservative systems, a multitude of cutting-edge ingredient technologies and specialty items for comprehensive treatment of aging skin, pigmentation disorders, acne and rosacea. The company also boasts a clinically evaluated moisturizing pillow case which is an exclusive all-night skin care treatment accessory.</p>

                        <p>Circadia by Dr. Pugliese has a rich history and bright future. Dr. Pugliese, Circadia’s founder, remains a strong, influential voice in the science of aging skin. Michael Pugliese, Circadia’s CEO, has earned a distinguished reputation as a lecturer in skin science and as an innovator in product formulation.</p>


                        <p><h3 id="bumpdown">Face Reality Skincare</h3></p>
                        <p><img src="https://github.com/shelkelly/SuiteSkin/blob/main/suite-skin/src/images/products/facerealitylogo.png?raw=true" alt="Face Reality" id="product3"></img></p>
                        <p>Acne is a mysterious skin disorder, but one thing is for sure – it can be controlled with the right combination of products, used in the correct way. Just as in a clogged drain, the pore must be treated with products that unclog it and kill the acne bacteria.</p>

                        <p>Face Reality Skincare has a clear-skin system that will have your acne under control in about three to four months, depending on your type of acne. We combine the power of clinical-grade products that are customized for your type of acne, with a series of bi-monthly treatments. We also teach you about other aggravating factors that make you break out – foods, medications, cosmetics, stress, and common ingredients in skin care formulations that might be clogging your pores (even professional and prescription products)</p>
                        

                        <p><h3>Grande Cosmetics</h3></p>
                        <p><a href="https://grandecosmetics.com/"><img src="https://github.com/shelkelly/SuiteSkin/blob/main/suite-skin/src/images/products/GrandeLogo.png?raw=true" alt="GrandeLash" id="product4"></img></a></p>
                        <p><b>Serum and Mascara Only</b></p>
                        <p>An award-winning lash enhancing serum infused with a blend of vitamins, peptides, and amino acids to promote the appearance of naturally longer, thicker looking lashes in 4-6 weeks, with full improvement in 3 months. It’s a favorite for helping to enhance short, thinning, brittle lashes. Ophthalmologist tested. Suitable for contacts and lash extensions.</p>
                        
                        <p><h3>Youngblood Mineral Cosmetics</h3></p>
                        <p><a href="https://www.ybskin.com/"><img src="https://github.com/shelkelly/SuiteSkin/blob/main/suite-skin/src/images/products/youngblood.png?raw=true" alt="Youngblood" id="product5"></img></a></p>
                        <p>Today, Youngblood remains the only ultra-luxury cosmetics brand that focused on using naturally-derived ingredients that allow them to maintain luxury performance. It's why dermatologists and plastic surgeons have endorsed Youngblood as the safer, and only, cosmetics brand suitable for post-op use for more than 20 years.</p>

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

export default Products;