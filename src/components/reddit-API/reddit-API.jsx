import React, { useState } from 'react';
import './reddit-API.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button';

const RedditAPI = () => {

    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(
            `https://www.reddit.com/subreddits/search.json?q=${query}&include_over_18=on`
        )
        .then((response) => response.json())
        .then((response) => response.data.children)
        .then((response) => response.map(result => ({
            title: result.data.title,
            url: result.data.url,
            description: result.data.description,
            image: result.data.header_img
        })))
        .then((response) => setResults(response))
        // .then((response) => console.log(response));
        .catch(error => {
            console.log(error)
            alert('Error! Try Again!')
        })
    };

    console.log(results);

    return (
        <div className='reddit-api'>
            <Container>
                <h1><Badge variant='secondary'>Reddit API</Badge></h1>
                <Form onSubmit={handleSubmit} className='form'>
                    <Form.Group controlId='formSearch'>
                        <Form.Control type='text' onChange={(e) => setQuery(e.target.value)} placehold='Search for a subreddit!' />
                        <Form.Text className='text-muted'>Search reddit for a subreddit matching your query</Form.Text>
                        <Button as='input' type='submit' value='Search' block/>{''}
                    </Form.Group>
                </Form>
                <div className='results'>
                    {
                        results && results.map(item => 
                        <div className='subreddit' key={item.title}>
                            <img src={item.image} alt={item.url} className='reddit-image'></img>
                            <p className='reddit-title'>{item.title}</p>
                            <p className='reddit-description'>{item.description}</p>
                            <p className='reddit-url'>{item.url}</p>
                        </div>                    
                        )
                    }
                </div>
            </Container>
        </div>
    )
}

export default RedditAPI;