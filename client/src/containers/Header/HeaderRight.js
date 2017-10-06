import React, { Component } from 'react';
import LogoutButton from './LogoutButton';
import MyProfileButton from './MyProfileButton';


class HeaderRight extends Component {
    render() {
        return (
            <div className="header-right">
                <MyProfileButton />                
                <LogoutButton />
            </div>
        )
    }
}

export default HeaderRight;