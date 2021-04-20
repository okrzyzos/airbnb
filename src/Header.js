import React from 'react';
import './Header.css'
import LanguageIcon from '@material-ui/icons/Language';
import { Link } from 'react-router-dom';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Header = () => {
    return (
        <>
        <div className="header">

        <Link className="nav-link" to="/">
        <img className="header__icon" src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png" alt="logoarbnb"/>

        </Link>

        <div className="header__center">
            <input type="text"/>
            <SearchIcon/>
        </div>
        <div className="header__right">
            <p>Become a host</p>
            <LanguageIcon/>
            <ArrowDropDownIcon/>
            <AccountCircleIcon style={{color:'lightgray',fontSize:40}}/>
        </div>

        </div>
    </>
    );
};

export default Header;