import React from 'react';
import './nav-bar.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'

const NavBar = ({handleSection}) => {
    return (
        <div className='nav-bar'>
            <Container fluid>
                <Row>
                    <Col><Button className='section-click' onClick={() => handleSection('bootstrap-table')} >Bootstrap Table</Button></Col>
                    <Col><Button className='section-click' onClick={() => handleSection('API-call')}>API Call & Table</Button></Col>
                </Row>
            </Container>
        </div>
    )
};

export default NavBar;