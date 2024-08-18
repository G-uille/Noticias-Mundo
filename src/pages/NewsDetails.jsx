import React from 'react';
import { useSelector } from 'react-redux';

const NewsDetails = () => {
    
    const newSelected = useSelector((state) => state.newsPopular.newSelected);

    return(
        <div className='container-news-details'>
            <div className='container-img__details'>
            <img alt={newSelected.title} src={newSelected.urlToImage} className='img_details'/>

            </div>
            <h1>{newSelected.title}</h1>
            <p className="news__popular--text">{newSelected.author}</p>
            <span>{newSelected.description}</span>
        </div>
    )
};

export  default NewsDetails;