/* 
Nom du fichier  : SettingsButton.js
Description     : Composant React contenant le bouton déclenchant l'ouverture du menu glissant de la page 'Animation'
Auteur          : Jessica Chan
Autre étudiant  : Sebastian Perez 
*/

// REF : https://www.kirupa.com/react/smooth_sliding_menu_react_motion.htm
// REF Installation node et npm : https://www.npmjs.com/package/react-jsx

import React, { Component } from "react";

class SettingsButton extends Component {
    render() {
    return (
      <button id='button' onMouseDown={this.props.handleMouseDown}>
        Options
      </button>
    );
  }
}

export default SettingsButton;




