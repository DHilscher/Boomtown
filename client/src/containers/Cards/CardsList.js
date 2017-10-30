import React, { Component } from "react";
import Masonry from "react-masonry-component";
import { connect } from "react-redux";
import ShareButton from "../../components/share";
import { SingleCard } from "../../components/Card";
import { Link } from "../../../node_modules/react-router-dom";
import PropTypes from "prop-types";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import "./styles.css";
class CardsList extends Component {
  static propTypes = {};

  render() {
    if (this.props.data.loading) return <p> loading </p>;

    console.log(this.props.data.items);
    return (
      <div className="cards-container">
        <Masonry className="masonry-styling" elementType={"ul"}>
          {this.props.data.items.map(userItems => (
            <li className="card-container" key={userItems.id}>
              <SingleCard data={userItems} />
            </li>
          ))}
        </Masonry>
        <ShareButton />
      </div>
    );
  }
}

export const itemQuery = gql`
  query getItems {
    items {
      id
      imageurl
      created
      title
      description
      tags {
        title
      }
      borrower {
        id
      }
      itemowner {
        id
        fullname
        email
      }
    }
  }
`;

// const mapStateToProps = state => ({
//     filteredItems: state.filteredItems
// });

export default graphql(itemQuery)(CardsList);
// export default graphql(itemQuery, {
//     options: ownProps => ({
//         variables: {
//             id: ownProps
//         }
//     }),
// })(CardsList);

// export default connect(mapStateToProps)(CardsList);
