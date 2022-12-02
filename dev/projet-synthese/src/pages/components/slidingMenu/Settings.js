import React, { Component } from "react";

class Settings extends Component {

    handleTelechargement() {
        if (window.sessionStorage.getItem('session_id') != null) {
            console.log('Téléchargement');        }
        else {
            document.getElementById("telechargement").className = "shake";
            setTimeout(() => {
                document.getElementById("telechargement").classList.remove("shake");
              }, 500);
            let message = document.getElementById("messageContainer");
            message.innerText = "Action requires login";
            message.style.display = 'block';
            setTimeout(() => {
                message.style.display = 'none';
            }, 1800);
        }
    }

    handlePartage() {
        if (window.sessionStorage.getItem('session_id') != null) {
            document.dispatchEvent(new Event('startRecording'));
        }
        else {
            document.getElementById("partage").className = "shake";
            setTimeout(() => {
                document.getElementById("partage").classList.remove("shake");
              }, 500);
            let message = document.getElementById("messageContainer");
            message.innerText = "Action requires login";
            message.style.display = 'block';
            setTimeout(() => {
                message.style.display = 'none';
              }, 1800);
        }
    }

    // ! Use this when possible in else of two previous functions
    showMessage() {
        let message = document.getElementById("messageContainer");
        message.innerText = "Action requires login";
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