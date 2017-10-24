import React, { Component } from 'react';
import { SingleCard } from "../../components/Card";
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class Profile extends Component {
  render() {
    console.log(this.props.data.user)
            if (this.props.data.loading) return <p> loading </p>
    return (
      <div>
      {this.props.data.user.owneditems.map((userItems) =>
          <li className="card-container" key={userItems.id}>
            <SingleCard data={userItems} />
          </li>
        )
      }
      </div>
    )
  }
}

export const getUser = gql`
    query getUser($id: ID!) {
        user (id: $id) {
          id
          fullname
          email
          bio
          borroweditems {
            title
            id
          }
          owneditems {
            title
            id
          }
  }
}
`
// const fetchData = gql `
//   query getUsers {
//     users {
//       id
//     }
//  }
// `;

export default graphql(getUser, {
  options: ownProps => ({
    variables: {
      id: ownProps.match.params.id
    }
  }),
})(Profile);

// export default graphql(fetchData)(Profile);