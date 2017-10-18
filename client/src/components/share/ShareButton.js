import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { Link } from '../../../node_modules/react-router-dom';

class ShareButton extends Component {
  render() {
    return (
      <Link to="/share">
        <div className="share-button">
          <FloatingActionButton className="share-button" backgroundColor='black' style={{ position: 'fixed', bottom: 10, right: 10, boxShadow: 'none' }}>
            <ContentAdd />
          </FloatingActionButton>
        </div>
      </Link>
    )
  }
}

export default ShareButton;