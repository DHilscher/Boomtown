import React, { Component } from 'react';
import HeaderRight from './HeaderRight';
import HeaderLeft from './HeaderLeft';


import './styles.css';





class Header extends Component {
    render() {
        return (
            <div className="header-container">
                <HeaderLeft />
                <HeaderRight />
            </div>
        )
    }
}

export default Header 