import React from 'react';
import Row from 'react-bootstrap/Row';
import './slider.css';

const Slider = ({images, index}) => {

    console.log(index*(100/images.length));

    return (
        images.length > 0 &&
        <div className='cards-slider'>
            <div className='cards-slider-wrapper' style={{
                transform: `translateX(-${index*(100/images.length)}%)`
            }}>
                {
                    images.map(image => <img src={image} alt={image} key={image} />)
                }
            </div>
            <Row className='tracker-container'>
                    {
                        images.map((image, i) => <div className={index===i ? 'tracker-show' : 'tracker-hide'}></div>)
                    }
            </Row>
        </div>
    )
};

export default Slider;