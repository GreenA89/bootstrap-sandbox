import React from 'react';
import './slider.css';

const Slider = ({images, index}) => {

    return (
        images.length > 0 &&
        <div className='cards-slider'>
            <div className='cards-slider-wrapper'>
                <div className='slider'>
                    {
                        images.map(image => <img src={image} alt={image} key={image} />)
                    }
                    {/* <img src={images[index]} alt={images[index]}></img> */}
                </div>
            </div>
        </div>
    )
};

export default Slider;