import React, { Component } from "react";

class Settings extends Component {
    constructor(props) {
        super(props);
        this.showMessage = this.showMessage.bind(this);
        this.handlePartage = this.handlePartage.bind(this);
        this.handleTelechargement = this.handleTelechargement.bind(this);
        this.shake = this.shake.bind(this)
    }

    shake(buttonId) {
        document.getElementById(buttonId).className = "shake";
        setTimeout(() => {
            document.getElementById(buttonId).classList.remove("shake");
          }, 500);
    }

    handleTelechargement() {
        if (window.sessionStorage.getItem('session_id') != null) {
            console.log('Téléchargement');        }
        else {
            this.shake('telechargement');
            this.showMessage();
        }
    }

    handlePartage() {
        if (window.sessionStorage.getItem('session_id') != null) {
            document.dispatchEvent(new Event('startRecording'));
        }
        else {
            this.shake('partage');
            this.showMessage()
        }
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
                    <button onMouseDown={this.handleTelechargement} id="telechargement">TÉLÉCHARGER</button>
                    <button onMouseDown={this.handlePartage} id="partage">PARTAGER</button>
                </div>
                </div>);
        
    }
}

export default Settings;