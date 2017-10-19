import React from 'react';
import PropTypes from 'prop-types';
import Header from './../../containers/Header';
import Share from '../.././containers/Share';
import './styles.css';

const Layout = ({ children }) => (
    <div className="appContentWrapper">
        <div className="appHeader">
            {window.location.href !== "http://localhost:3000/login" ? <Header /> : null}
            
        </div>
        <div className="appContent">
            {children}
        </div>
        {window.location.href !== "http://localhost:3000/login" ? <footer style={{ textAlign: 'center' }}>© 2017 Boomtown Corp. All Rights Reserved</footer> : null}
    </div>
);

Layout.defaultProps = {
    children: null
};

Layout.propTypes = {
    children: PropTypes.node
};

export default Layout;
