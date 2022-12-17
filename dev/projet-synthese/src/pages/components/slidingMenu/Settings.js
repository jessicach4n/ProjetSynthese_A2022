import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShare, faCandyCane } from '@fortawesome/free-solid-svg-icons'

class Settings extends Component {
    constructor(props) {
        super(props);
        this.showMessage = this.showMessage.bind(this);
        this.handlePartage = this.handlePartage.bind(this);
        this.shake = this.shake.bind(this)
    }

    shake(buttonId) {
        document.getElementById(buttonId).className = "shake";
        setTimeout(() => {
            document.getElementById(buttonId).classList.remove("shake");
          }, 500);
    }

    handlePartage() {
        if (window.sessionStorage.getItem('session_id') != null) {
            document.dispatchEvent(new Event('startRecording'));
        }
        else {
            this.shake('partage');
            this.showMessage();
        }
    }

    toggleColor() {
        // REF : https://css-tricks.com/snippets/javascript/random-hex-color/
        let randomColor = 0;
        while (randomColor.length != 6) {
            randomColor = Math.floor(Math.random()*16777215).toString(16);
        }
        let root = document.querySelector(":root");
        root.style.setProperty('--main-accent-color', '#' + randomColor)
    }

    showMessage() {
        let message = document.getElementById("messageContainer");
        message.innerText = "Cette action requiert un compte";
        message.style.display = 'block';
        setTimeout(() => {
            message.style.display = 'none';
          }, 1800);
    }

    render() {
        let visibility = "hide";
    
        if (this.props.menuVisibility) {
            visibility = "show";
        }
    
        return (<div id="menu" className={visibility}>
                <button id="fermer" onMouseDown={this.props.handleMouseDown}>Fermer</button>
                <div id="messageContainer"></div>
                <div className="buttonContainer">
                    <button onMouseDown={this.toggleColor} ><FontAwesomeIcon icon={faCandyCane} className="icon"/> Surprise</button>
                    <button onMouseDown={this.handlePartage} id="partage"><FontAwesomeIcon icon={faShare} className="icon"/> PARTAGER</button>
                </div>
                </div>);
        
    }
}

export default Settings;