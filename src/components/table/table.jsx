import React, { useEffect } from 'react';
import './table.css';
import Container from 'react-bootstrap/Container';
import { Table } from 'react-bootstrap';

const TableComponent = ({section}) => {

    return (
        <div className='table-component'>
            <Container>
                <div className='table-title'>Bootstrap Table</div>
                <Table striped bordered hover responsive className='table' size='sm' variant='dark'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                            </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td colSpan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </div>
    )
};

export default TableComponent;