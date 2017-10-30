import React, { Component } from "react";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import Gravatar from "react-gravatar";
import RaisedButton from "material-ui/RaisedButton";
import moment from "moment";
import { Link } from "../../../node_modules/react-router-dom";
import { connect } from "react-redux";

export class SingleCard extends Component {
  render() {
    const {
      available,
      imageurl,
      itemowner,
      created,
      title,
      tags,
      description
    } = this.props.data;

    const tag = tags.map(tag => tag.title);

    return (
      <Card>
        <CardMedia overlay={!available && <CardTitle subtitle="Unavailable" />}>
          <img className="item-image" src={imageurl} alt="" />
        </CardMedia>
        <Link to={`/profile/${itemowner.id}`}>
          <CardHeader
            title={itemowner.fullname}
            subtitle={moment(created).fromNow()}
            avatar={<Gravatar email={itemowner.email} />}
          />
        </Link>
        <CardTitle title={title} subtitle={tag.join(", ")} />
        <CardText>{description}</CardText>
        <CardActions>
          {available ? (
            <RaisedButton
              onClick={available && false}
              backgroundColor="black"
              secondary={true}
              label="Borrow"
            />
          ) : (
            false
          )}
        </CardActions>
      </Card>
    );
  }
}
