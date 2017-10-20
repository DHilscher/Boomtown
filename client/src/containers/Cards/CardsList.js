import React, { Component } from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Masonry from 'react-masonry-component';
import { connect } from 'react-redux'
import { getCardItems } from '../../actions';
import ShareButton from '../../components/share';
import Gravatar from 'react-gravatar';
import moment from 'moment';
import { Link } from '../../../node_modules/react-router-dom';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import './styles.css';
class CardsList extends Component {
    static propTypes = {
    };
    
    render() {
        if (this.props.data.loading) return <p> loading </p>
        
        console.log(this.props.data.items)
        return (
        <div className="cards-container">
        <Masonry className="masonry-styling" elementType={'ul'}>
        {this.props.data.items.map((userItems) =>
            <li className="card-container" key={userItems.id}>
            <Card>
            <CardMedia overlay={!userItems.available && <CardTitle subtitle="Unavailable" />}>
            <img className="item-image" src={userItems.imageurl} alt="" />
            </CardMedia>
            <Link to={`/profile/${userItems.itemowner.fullname}`}>
            <CardHeader
            title={userItems.itemowner.fullname}
            subtitle={moment(userItems.created).fromNow()}
            avatar={<Gravatar email={userItems.itemowner.email} />}
            />
            </Link>
            <CardTitle title={userItems.title} subtitle={userItems.tags} />
            <CardText>
            {userItems.description}
            </CardText>
            <CardActions>
            {userItems.available ? <RaisedButton onClick={userItems.available && false} backgroundColor='black' secondary={true} label="Borrow" /> : false}
            </CardActions>
            </Card>
            </li>
            )}
            </Masonry>
            <ShareButton />
            </div>
            )
        }
    };
    
    export const itemQuery = gql`
    query getItems {
        items {
            id
            available
            imageurl
            created
            title
            tags
            description
            itemowner {
                fullname
                email
            }
        }
    }
    `
    
    // const mapStateToProps = state => ({
        //     filteredItems: state.filteredItems
        // });
        
        export default graphql(itemQuery)(CardsList);
        
        // export default connect(mapStateToProps)(CardsList);