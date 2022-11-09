import React, { Component } from "react";

class Settings extends Component {

    handleTelechargement() {
        console.log('Téléchargement')
    }

    handlePartage() {
        console.log('Partage')
    }

    render() {
        let visibility = "hide";
    
        if (this.props.menuVisibility) {
            visibility = "show";
        }
    
        return (<div id="menu" onMouseDown={this.props.handleMouseDown} className={visibility}>
                <div className="buttonContainer">
                    <button id="telechargement">TÉLÉCHARGER</button>
                    <button id="partage">PARTAGER</button>
                    
                </div>
                </div>);
        
    }
}

export default Settings;