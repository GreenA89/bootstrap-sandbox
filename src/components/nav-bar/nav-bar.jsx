import React from 'react';
import './nav-bar.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'

const NavBar = ({handleSection, clicked, section}) => {
    return (
        <div className='nav-bar'>
            <Container fluid>
                <Row>
                    <Col><div className='page-title'>Test Code Portfolio</div></Col>
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
                            onClick={() => handleSection('API-call')}
                            disabled={clicked && section !== 'API-call'}
                        >
                            {clicked && section ==='API-call' ? 'Close' : 'API Call'}
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