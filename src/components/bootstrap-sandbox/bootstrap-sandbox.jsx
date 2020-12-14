import React, { useState } from 'react';
import './bootstrap-sandbox.css';
import NavBar from '../nav-bar/nav-bar';
import TableComponent from '../table/table';

const BootstrapSandbox = () => {

    const [section, setSection] = useState('');

    const handleSection = (sectionName) => {
        setSection(sectionName);
    }

    console.log(section)
    
    return (
        <div className='bootstrap-sandbox'>
            <NavBar handleSection={handleSection} />
            <TableComponent />
        </div>
    );
}

export default BootstrapSandbox;