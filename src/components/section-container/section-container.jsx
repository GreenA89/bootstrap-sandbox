import React from 'react';
import './section-container.css';
import TableComponent from '../table/table';
import Carousel from '../carousel/carousel';
import RedditAPI from '../reddit-API/reddit-API';

const SectionContainer = ({section, clicked}) => {
    return (
        <div className={clicked ? 'section-container show' : 'section-container hide'} id='section-container'>
            {section==='bootstrap-table' && <TableComponent/>}
            {section==='carousel' && <Carousel />}
            {section==='reddit-api' && <RedditAPI />}
        </div>
    )
};

export default SectionContainer;