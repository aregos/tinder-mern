import React from 'react';
import './Header.css';
import {Forum, Person} from "@material-ui/icons";
import {IconButton} from "@material-ui/core";

const Header = () => {
    return (
        <div className="header">
            <IconButton>
                <Person fontSize="large" className="header__icon"/>
            </IconButton>
            <img
                className="header__logo"
                src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png" alt="logo"
                alt=""
            />
            <IconButton>
                <Forum fontSize="large" className="header__icon"/>
            </IconButton>
        </div>
    );
};

export default Header;