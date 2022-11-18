import React, { Component } from "react";

class Settings extends Component {

    handleTelechargement() {
        console.log('Téléchargement');
    }

    handlePartage() {
        console.log('Partage');
    }

    render() {
        let visibility = "hide";
    
        if (this.props.menuVisibility) {
            visibility = "show";
        }
    
        return (<div id="menu" className={visibility}>
                <button id="fermer" onMouseDown={this.props.handleMouseDown}>Fermer</button>
                <div className="buttonContainer">
                    <button onMouseDown={this.handleTelechargement} id="telechargement">TÉLÉCHARGER</button>
                    <button onMouseDown={this.handlePartage} id="partage">PARTAGER</button>
                </div>
                </div>);
        
    }
}

export default Settings;