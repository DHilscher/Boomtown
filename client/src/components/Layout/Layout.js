import React from 'react';
import PropTypes from 'prop-types';
import Header from './../../containers/Header'
import CardItem from './../../containers/Cards'

import './styles.css';

const Layout = ({ children }) => (
    <div className="appContentWrapper">
        <div className="appHeader">
            {/* Might want to put your header bar here... */}
            <Header />
        </div>
        <div className="appContent">
            {children}
            <div className="cards-container">
                <CardItem />
            </div>
        </div>
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