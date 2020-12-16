import React, { useState } from 'react';
import './bootstrap-sandbox.css';
import NavBar from '../nav-bar/nav-bar';
import SectionContainer from '../section-container/section-container';


const BootstrapSandbox = () => {

    const [section, setSection] = useState('');
    const [clicked, setClicked] = useState(false);

    const handleSection = (sectionName) => {
        setSection(sectionName);
        setClicked(!clicked);
    }

    return (
        <div className='bootstrap-sandbox'>
            <NavBar handleSection={handleSection} clicked={clicked} section={section} />
            <SectionContainer section={section} clicked={clicked} />
        </div>
    );
}

export default BootstrapSandbox;