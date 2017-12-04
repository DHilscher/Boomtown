import React from "react";
import Paper from "material-ui/Paper";
import Gravatar from "react-gravatar";

import "./styles.css";

const PaperProfile = ({ user }) => {
  const { bio, fullname, owneditems, borroweditems, email } = user;

  // const tag = tags.map(tag => tag.title);

  return (
    <div>
      <Paper className="paper" zDepth={1}>
        <div className="container">
          <div className="left-container">
            {fullname}
            {bio}
          </div>
          <div className="right-container">
            {owneditems.length}
            {borroweditems.length}
            <Gravatar email={email} />
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default PaperProfile;
