import React from 'react';
import './section-container.css';
import TableComponent from '../table/table';

const SectionContainer = ({section, clicked}) => {
    return (
        <div className={clicked ? 'section-container show' : 'section-container hide'} id='section-container'>
            {section==='bootstrap-table' && <TableComponent/>}
        </div>
    )
};

export default SectionContainer;