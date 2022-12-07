import React, { Component } from "react";
import '../../css/card.css'
import * as myConstants from '../constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faMap, faCalendarTimes} from '@fortawesome/free-regular-svg-icons'

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
              <div id="username"><FontAwesomeIcon icon={faUser} className="statIcon"/> {this.username}</div>
              <div id="area"><FontAwesomeIcon icon={faMap} className="statIcon"/> {this.city}, {this.country}</div>
              <div id="timestamp"><FontAwesomeIcon icon={faCalendarTimes} className="statIcon"/> {this.timestamp}</div>
            </div>
          </div>
        );
      }
}

export default Card