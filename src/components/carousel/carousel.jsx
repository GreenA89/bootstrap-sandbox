import React, { useState } from 'react';
import './carousel.css';
import Container from 'react-bootstrap/Container';
import Slider from '../slider/slider';

const Carousel = () => {

    const [query, setQuery] = useState('');
    const [images, setImages] = useState([]);
    const [index, setIndex] = useState(0);

    const slideRight = () => {
        setIndex((index + 1) % images.length);
    };

    const slideLeft = () => {
        const nextIndex = index - 1;
        if (nextIndex < 0) {
            setIndex(images.length - 1);
        } else {
            setIndex(nextIndex);
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const APIKey = '19640678-9ae7a1d59e65155a51453ef99'
        fetch(
            `https://pixabay.com/api/?key=${APIKey}&q=${query}`
        )
        .then((response) => response.json())
        .then(({ hits }) => hits.map(({ webformatURL }) => webformatURL))
        .then(setImages)
        .catch(error => {
            console.log(error)
            alert('Error! Try Again!')
        });
        setIndex(0);
    };

    

    return (
        <div className='carousel'>
            <Container fluid>
                <p>Carousel</p>
                <form onSubmit={handleSubmit} >
                    <input type='text' onChange={(e) => setQuery(e.target.value)} />
                    <input type='submit' value='Search!' />
                </form>
                <button onClick={slideLeft}>{'Prev'}</button>
                <button onClick={slideRight}>{'Next'}</button>
                <Slider images={images} index={index} />
            </Container>            
        </div>
    )
};

export default Carousel;