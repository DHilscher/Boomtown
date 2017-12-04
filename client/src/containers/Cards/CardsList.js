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
    const { data, filteredTags } = this.props;
    if (data.loading) {
      return <p> loading </p>;
    }
    const cardList = data.items;
    const filteredCardList = cardList.filter(item => {
      if (
        item.tags.some(
          tag =>
            filteredTags.findIndex(singleTag => singleTag === tag.title) !== -1
        )
      ) {
        return item;
      }
      return filteredCardList;
    });

    if (filteredTags.length > 0) {
      return (
        <div className="cards-container">
          <Masonry className="masonry-styling" elementType={"ul"}>
            {filteredCardList.map(userItems => (
              <li className="card-container" key={userItems.id}>
                <SingleCard data={userItems} />
              </li>
            ))}
          </Masonry>
          <ShareButton />
        </div>
      );
    } else {
      return (
        <div className="cards-container">
          <Masonry className="masonry-styling" elementType={"ul"}>
            {data.items.map(userItems => (
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

const mapStateToProps = state => ({
  filteredTags: state.filters.filters
});

const fetchCardList = graphql(itemQuery)(CardsList);
// export default graphql(itemQuery, {
//     options: ownProps => ({
//         variables: {
//             id: ownProps
//         }
//     }),
// })(CardsList);

export default connect(mapStateToProps)(fetchCardList);
