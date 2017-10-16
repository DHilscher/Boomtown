import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from '../../../node_modules/react-router-dom';

class LogoutButton extends Component {
    render() {
        return (
             <Link to="/login">
            <div className="logout-button">
                <RaisedButton className="logout-button" style={{ marginRight: '10px', marginLeft: '15px' }} backgroundColor='black' labelColor='white' label="Logout" />                
            </div>
            </Link>
        )
    }
}

export default LogoutButton;