import React from 'react';
import './nav-bar.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'

const NavBar = ({handleSection, clicked, section}) => {
    return (
        <div className='nav-bar'>
            <Container fluid>
                <Row>
                    <Col><h1><Badge variant='secondary'>Test Code Portfolio</Badge></h1></Col>
                    <Col><Button 
                            className='section-click' 
                            onClick={() => handleSection('bootstrap-table')}
                            disabled={clicked && section !== 'bootstrap-table'}
                        >
                                {clicked && section ==='bootstrap-table' ? 'Close' : 'Bootstrap Table'}
                        </Button>
                    </Col>
                    <Col><Button 
                            className='section-click' 
                            onClick={() => handleSection('reddit-api')}
                            disabled={clicked && section !== 'reddit-api'}
                        >
                            {clicked && section ==='reddit-api' ? 'Close' : 'Reddit API'}
                        </Button>
                    </Col>
                    <Col>
                        <Button 
                            className='section-click' 
                            onClick={() => handleSection('carousel')}
                            disabled={clicked && section !== 'carousel'}
                        >
                            {clicked && section ==='carousel' ? 'Close' : 'Carousel'}
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default NavBar;