import React, { Component } from "react";
import '../../css/card.css'
import * as myConstants from '../constants'

class Card extends Component {
    constructor(props) {
      super(props);
      this.username = props.username;
      this.city = props.city;
      this.country = props.country;
      this.timestamp = props.timestamp;
      this.video = props.video;
    }

    render() {
        let source = myConstants.HOST + "/video.php?id=" + this.video;
        return (
          <div className="cardContainer">
            <video src={source} controls></video>
            <div className="infos">
              <div id="username">{this.username}</div>
              <div id="area">{this.city + ', ' + this.country}</div>
              <div id="timestamp">{this.timestamp}</div>
            </div>
          </div>
        );
      }
}

export default Card