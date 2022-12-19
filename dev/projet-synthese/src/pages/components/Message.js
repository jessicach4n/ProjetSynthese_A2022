import '../../css/message.css'
import React, { Component } from "react";

class Message extends Component {
    constructor(props) {
      super(props);
      this.username = props.username;
      this.city = props.city;
      this.timestamp = props.timestamp;
    }

    componentDidMount() {
      document.addEventListener('startRecording', () => {
          document.getElementById("recordingPopUp").style.display = 'block';
      });
      document.addEventListener('recordingDone', () => {
        document.getElementById("recordingPopUp").style.display = 'none';
      });
  }

    render() {
        return (
          <div id="recordingPopUp">
            <div className="recordingMessage">Enregistrement de la video en cours, veuillez patienter</div>
          </div>
        );
      }
}


export default Message