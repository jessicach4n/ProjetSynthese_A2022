/* 
Nom du fichier  : Settings.js
Description     : Composant React contenant le menu glissant de la page 'Animation' incluant deux boutons 
                  dont l'un est le bouton de partage.
Auteur          : Jessica Chan
Autre étudiant  : Sebastian Perez 
*/

import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShare, faCandyCane } from '@fortawesome/free-solid-svg-icons'

class Settings extends Component {
    constructor(props) {
        super(props);
        this.showMessage = this.showMessage.bind(this);
        this.handlePartage = this.handlePartage.bind(this);
        this.shake = this.shake.bind(this);
        this.enableButton = this.enableButton.bind(this);
        this.disableButton = this.disableButton.bind(this);
    }

    componentDidMount() {
        document.addEventListener('recordingDone', () => {
            this.enableButton()
        });
    }

    enableButton() {
        document.getElementById('partage').disabled = false;
        document.getElementById('partage').style.opacity = 1;
        document.getElementById('partage').style.cursor = 'pointer';
    }

    disableButton() {
        document.getElementById('partage').disabled = true;
        document.getElementById('partage').style.opacity = 0.5;
        document.getElementById('partage').style.cursor = 'default';
    }

    shake(buttonId) {
        document.getElementById(buttonId).className = "shake";
        setTimeout(() => {
            document.getElementById(buttonId).classList.remove("shake");
        }, 500);
    }

    showMessage() {
        let message = document.getElementById("messageContainer");
        message.innerText = "Cette action requiert un compte";
        message.style.display = 'block';
        setTimeout(() => {
            message.style.display = 'none';
        }, 1800);
    }

    handlePartage() {
        if (window.sessionStorage.getItem('session_id') != null) {
            document.dispatchEvent(new Event('startRecording'));
            this.disableButton()
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
            randomColor = Math.floor(Math.random() * 16777215).toString(16);
        }
        let root = document.querySelector(":root");
        root.style.setProperty('--main-accent-color', '#' + randomColor)
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
                <button onMouseDown={this.toggleColor} ><FontAwesomeIcon icon={faCandyCane} className="icon" /> Surprise</button>
                <button onMouseDown={this.handlePartage} id="partage"><FontAwesomeIcon icon={faShare} className="icon" /> PARTAGER</button>
            </div>
        </div>);
    }
}

export default Settings;