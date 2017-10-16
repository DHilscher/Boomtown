import React, { Component } from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Masonry from 'react-masonry-component';
import { connect } from 'react-redux'
import { getCardItems } from '../../actions';
import Gravatar from 'react-gravatar';
import moment from 'moment';
import './styles.css';
class CardsList extends Component {
    componentDidMount() {
        this.props.getCardItems()
        // const urls = ['http://localhost:3001/items', 'http://localhost:3001/users']
        // Promise.all(urls.map(url =>
        //     fetch(url).then(resp => resp.json())
        // )).then(data => {
        //     const [items, users] = data;
        //     const itemWithUser = items.map((item) => {
        //         return {
        //             ...item,
        //             key: item.id,
        //             user: users.find(user => user.id === item.itemOwner),
        //         }
        //     })

        //     this.setState({ data: itemWithUser });
        // })
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
                                    <CardHeader
                                        title={userItems.users[0].fullname}
                                        subtitle={moment(userItems.created).fromNow()}
                                        avatar={<Gravatar email={userItems.users[0].email} />}
                                    />
                                    <CardTitle title={userItems.title} subtitle={userItems.tags} />
                                    <CardText>
                                        {userItems.description}
                                    </CardText>
                                    <CardActions>
                                       {userItems.available ? <RaisedButton backgroundColor='black' labelColor='white' label="Borrow" /> : false }
                                    </CardActions>
                                </Card>
                            </li>
                        )}
                </Masonry>
            </div>
        )
    }
};



export default connect((store) => store.users, { getCardItems })(CardsList);




{/*<div className="card-container" key={userItems.id}>
                    <Card>
                        <CardMedia overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}>
                            <img src={userItems.imageUrl} alt="" />
                        </CardMedia>
                        <CardHeader
                            title={userItems.user.fullName}
                            subtitle={userItems.tags}
                            avatar="images/jsa-128.jpg"
                        />
                        <CardTitle title={userItems.title} subtitle="Card subtitle" />
                        <CardText>
                            {userItems.description}
                        </CardText>
                        <CardActions>
                            <RaisedButton backgroundColor='black' labelColor='white' label="Borrow" />
                        </CardActions>
                    </Card>
                    </div>*/}