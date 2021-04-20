import React,{useState} from 'react';
import './Banner.css'
import { useHistory } from 'react-router-dom';
import {Button} from '@material-ui/core';
import Search from './Search';

const Banner = () => {
    const history = useHistory();
    const [showSearch,setShowSearch] = useState(false)
    return (
        <div className="banner">
        <div className="banner__search">
        {showSearch && <Search/>}
            <Button onClick={()=> setShowSearch(!showSearch)} className="banner__searchButton" variant='outlined'>
                {showSearch ? 'Hide' : "Search Dates"}
            </Button>
        </div>
        <div className="banner__info">
        <h1>Get out and stretch your imagination</h1>
        <h5>Plan a different kid of getaway to uncover the hidden gems near you</h5>
        <Button onClick={()=>history.push('/search')} variant='outlined'>Eplore nearby</Button>

        </div>
            
        </div>
    );
};

export default Banner;