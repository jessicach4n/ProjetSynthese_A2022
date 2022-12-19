/* 
Nom du fichier  : Message.js
Description     : Classe représentant un objet message à afficher lors de l'enregistrement de l'animation.
Auteur          : Jessica Chan
Autre étudiant  : Sebastian Perez 
*/

import '../../css/message.css'
import React, { Component } from "react";

class Message extends Component {

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