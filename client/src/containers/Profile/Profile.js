import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import Masonry from "react-masonry-component";
import { SingleCard } from "../../components/Card";

class Profile extends Component {
  render() {
    if (this.props.data.loading) return <p> loading </p>;
    console.log("profile", this.props.data);
    return (
      <div className="cards-container">
        <Masonry className="masonry-styling" elementType={"ul"}>
          {this.props.data.user.owneditems.map(userItems => (
            <li className="card-container" key={userItems.id}>
              <SingleCard data={userItems} />
            </li>
          ))}
        </Masonry>
      </div>
    );
  }
}

export const getUser = gql`
  query getUser($id: ID!) {
    user(id: $id) {
      id
      fullname
      email
      bio
      owneditems {
        title
        id
        itemowner {
          fullname
          id
          email
        }
        description
        imageurl
        created
        tags {
          title
        }
      }
      borroweditems {
        id
      }
    }
  }
`;
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
  })
})(Profile);

// export default graphql(fetchData)(Profile);
