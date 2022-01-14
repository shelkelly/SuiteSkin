import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const items = [
    <div className="item" data-value="1"><img src="https://github.com/shelkelly/SuiteSkin/blob/main/suite-skin/src/images/stv.png?raw=true" class="responsive carousel" alt="Swipe to view"></img><p>Or click the buttons below</p></div>,
    <div className="item" data-value="2"><img src="https://github.com/shelkelly/SuiteSkin/blob/main/suite-skin/src/images/beforeandafters/baa1.png?raw=true" class="responsive carousel" alt="Acne client before and after photo"></img><p>Acne Treatment</p></div>,
    <div className="item" data-value="3"><img src="https://github.com/shelkelly/SuiteSkin/blob/main/suite-skin/src/images/beforeandafters/baa2.png?raw=true" class="responsive carousel" alt="Cystic acne client before and after photo"></img><p>Acne Treatment</p></div>,
    <div className="item" data-value="4"><img src="https://github.com/shelkelly/SuiteSkin/blob/main/suite-skin/src/images/beforeandafters/baa2.png?raw=true" class="responsive carousel" alt="Cystic acne client before and after photo"></img><p>Acne Treatment</p></div>,
    <div className="item" data-value="5"><img src="https://github.com/shelkelly/SuiteSkin/blob/main/suite-skin/src/images/beforeandafters/baa3.png?raw=true" class="responsive carousel" alt="Lash lift and tint client before and after photo"></img><p>Lash Lift and Tint</p></div>,
    <div className="item" data-value="6"><img src="https://github.com/shelkelly/SuiteSkin/blob/main/suite-skin/src/images/beforeandafters/baa4.png?raw=true" class="responsive carousel" alt="Brow shaping before and after results"></img><p>Brow Shaping</p></div>,
    <div className="item" data-value="7"><img src="https://github.com/shelkelly/SuiteSkin/blob/main/suite-skin/src/images/beforeandafters/baa5.png?raw=true" class="responsive carousel" alt="Lash lift before and after reult"></img><p>Lash Lift</p></div>,
    <div className="item" data-value="8"><img src="https://github.com/shelkelly/SuiteSkin/blob/main/suite-skin/src/images/beforeandafters/baa6.png?raw=true" class="responsive carousel" alt="Lash tint and lift before and after reult"></img><p>Lash Lift and Tint</p></div>,
    <div className="item" data-value="9"><img src="https://github.com/shelkelly/SuiteSkin/blob/main/suite-skin/src/images/beforeandafters/baa7.png?raw=true" class="responsive carousel" alt="Before and after lash lift"></img><p>Lash Lift</p></div>,
    <div className="item" data-value="10"><img src="https://github.com/shelkelly/SuiteSkin/blob/main/suite-skin/src/images/beforeandafters/baa8.png?raw=true" class="responsive carousel" alt="Before and After brow shaping male"></img><p>Brow Shaping</p></div>,
    <div className="item" data-value="11"><img src="https://github.com/shelkelly/SuiteSkin/blob/main/suite-skin/src/images/beforeandafters/baa9.png?raw=true" class="responsive carousel" alt="Before and after photo GrandeLash"></img><p>Lash Lift</p></div>
];

const renderSlideInfo = ({ item, itemsCount }) => {
    return `${item}\\${itemsCount}`;
};

const renderDotsItem = ({ isActive }) => {
    return isActive ? 'x' : 'o';
};

const renderPrevButton = ({ isDisabled }) => {
    return <span style={{ opacity: isDisabled ? '0.5' : 1 }}>&lt;</span>;
};

const renderNextButton = ({ isDisabled }) => {
    return <span style={{ opacity: isDisabled ? '0.5' : 1 }}>&gt;</span>;
};

const renderPlayPauseButton = ({ isPlaying }) => {
    return isPlaying ? 'PAUSE' : 'PLAY';
};

const Carousel = () => (
    <AliceCarousel
        mouseTracking
        items={items}
        autoPlayControls
        disableSlideInfo={false}
        renderSlideInfo={renderSlideInfo}
        renderDotsItem={renderDotsItem}
        renderPrevButton={renderPrevButton}
        renderNextButton={renderNextButton}
    />
);
export default Carousel;