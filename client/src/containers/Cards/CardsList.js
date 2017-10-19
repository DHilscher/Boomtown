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
import './styles.css';
class CardsList extends Component {
    componentDidMount() {
        this.props.getCardItems()
        
    }

    render() {
        console.log(this.props)
        return (
            <div className="cards-container">
                <Masonry className="masonry-styling" elementType={'ul'}>
                        {this.props.items.map((userItems) =>
                            <li className="card-container" key={userItems.id}>
                                <Card>
                                    <CardMedia overlay={!userItems.available && <CardTitle subtitle="Unavailable" />}>
                                        <img className="item-image" src={userItems.imageurl} alt="" />
                                    </CardMedia>
                                    <Link to={`/profile/${userItems.users[0].fullname}`}>
                                    <CardHeader
                                        title={userItems.users[0].fullname}
                                        subtitle={moment(userItems.created).fromNow()}
                                        avatar={<Gravatar email={userItems.users[0].email} />}
                                    />
                                    </Link>
                                    <CardTitle title={userItems.title} subtitle={userItems.tags} />
                                    <CardText>
                                        {userItems.description}
                                    </CardText>
                                    <CardActions>
                                       {userItems.available ? <RaisedButton onClick={userItems.available && false} backgroundColor='black' secondary={true} label="Borrow" /> : false }
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

export default connect((store) => store.users, { getCardItems })(CardsList);