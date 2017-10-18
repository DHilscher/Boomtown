import React from 'react';
import PropTypes from 'prop-types';
import Header from './../../containers/Header';
import ShareButton from '../../components/share';
import Share from '../.././containers/Share'
import './styles.css';

const Layout = ({ children }) => (
    <div className="appContentWrapper">
        <div className="appHeader">
            {window.location.href !== "http://localhost:3000/login" ? <Header /> : null}
            
        </div>
        <div className="appContent">
            {children}
        </div>
        <ShareButton />
        {/* And a footer here, but not on the login route... */}
    </div>
);

Layout.defaultProps = {
    children: null
};

Layout.propTypes = {
    children: PropTypes.node
};

export default Layout;
