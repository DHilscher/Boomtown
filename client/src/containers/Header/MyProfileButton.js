import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class MyProfileButton extends Component {
    render() {
        return (
            <div class="my-profile-button">
                <RaisedButton class="my-profile-button" primary={true} label="My Profile" />
            </div>
        )
    }
}

export default MyProfileButton;