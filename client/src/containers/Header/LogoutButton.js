import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class LogoutButton extends Component {
    render() {
        return (
            <div class="logout-button">
                <RaisedButton class="logout-button" backgroundColor='black' labelColor='white' label="Logout" />                
            </div>
        )
    }
}

export default LogoutButton;