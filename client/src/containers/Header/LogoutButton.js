import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class LogoutButton extends Component {
    render() {
        return (
            <div className="logout-button">
                <RaisedButton className="logout-button" style={{ marginRight: '10px', marginLeft: '15px' }} backgroundColor='black' labelColor='white' label="Logout" />                
            </div>
        )
    }
}

export default LogoutButton;