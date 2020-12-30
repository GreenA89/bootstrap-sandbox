import React, { useState } from 'react';
import './carousel.css';
import Container from 'react-bootstrap/Container';
import Slider from '../slider/slider';
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
                <h1><Badge variant='secondary'>Carousel</Badge></h1>
                <Form onSubmit={handleSubmit} >
                    <Form.Group controlID='formSearch'>
                        <Form.Control type='text' onChange={(e) => setQuery(e.target.value)} />
                        <Form.Text className='text-muted'>Search for any category of images to view</Form.Text>
                        <Button as='input' type='submit' value='Search!' block/>{''}
                    </Form.Group>
                </Form>
                <Row>
                    <Col>
                        <Button onClick={slideLeft}>{'Prev'}</Button>
                    </Col>
                    <Col>
                        <Button onClick={slideRight}>{'Next'}</Button>
                    </Col>
                </Row>
                <Slider images={images} index={index} />
            </Container>            
        </div>
    )
};

export default Carousel;