import React, { Component } from "react";
import '../../css/card.css'


class Card extends Component {
    constructor(props) {
      super(props);
      this.username = props.username;
      this.city = props.city;
      this.timestamp = props.timestamp;
    }

    render() {
        return (
          <div className="cardContainer">
            <video controls>
              <source type="video/mp4"></source>
            </video>
            <div className="infos">
              <div id="username">{this.username}</div>
              <div id="area">City, Area here</div>
              <div id="timestamp">Time stamp here</div>
            </div>
          </div>
        );
      }
}

export default Card