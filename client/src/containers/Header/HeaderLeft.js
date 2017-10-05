import React, { Component } from 'react';
import logo from '../../images/boomtown-logo.svg';
import HeaderFilter from './Filter';

class HeaderLeft extends Component {
    render() {
        return (
            <div class="header-left">
                <div className="logo">
                    <a href="/">
                        <img src={logo} alt="Boomtown Logo" />
                    </a>
                </div>
                <HeaderFilter />
            </div>
        )
    }
}

export default HeaderLeft;