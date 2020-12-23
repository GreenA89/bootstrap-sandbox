import React, { useState } from 'react';
import './carousel.css';
import Container from 'react-bootstrap/Container';

const Carousel = () => {

    const [query, setQuery] = useState('');
    const [images, setImages] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const APIKey = '19640678-9ae7a1d59e65155a51453ef99'
        fetch(
            `https://pixabay.com/api/?key=${APIKey}&q=${query}`
        )
        .then((response) => response.json())
        .then(({ hits }) => hits.map(({ webformatURL }) => webformatURL))
        .then(setImages);
        console.log(query);
        console.log(images)
    };

    

    return (
        <div className='carousel'>
            <Container fluid>
                <p>Carousel</p>
                <form onSubmit={handleSubmit} >
                    <input type='text' onChange={(e) => setQuery(e.target.value)} />
                    <input type='submit' value='Search!' />
                </form>
            </Container>            
        </div>
    )
};

export default Carousel;