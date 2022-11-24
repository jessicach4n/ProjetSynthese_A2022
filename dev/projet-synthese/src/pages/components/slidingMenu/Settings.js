import React, { Component } from "react";
import BreathingCircleAlgorithm from '../generativeAlgorithm/BreathingCircleAlgorithm';
import LineRotationAlgorithm from '../generativeAlgorithm/LineRotationAlgorithm';
import TriangleBezierCollisionAlgorithm from '../generativeAlgorithm/TriangleBezierCollisionAlgorithm';
import { BlockPicker } from "react-color";

class Settings extends Component {
    

    handleTelechargement() {
        console.log('Téléchargement');
    }

    handlePartage() {
        // const event = new CustomEvent('startRecording0', {detail:{number:123});
        document.dispatchEvent(new Event('startRecording'));
    }

    render() {
        let visibility = "hide";
    
        if (this.props.menuVisibility) {
            visibility = "show";
        }
    
        return (<div id="menu" className={visibility}>
                <button id="fermer" onMouseDown={this.props.handleMouseDown}>Fermer</button>
                {/* <BlockPicker
                    color={blockPickerColor}
                    onChange={(color) => {
                        setBlockPickerColor(color.hex);
                    }}
                /> */}
                <div className="buttonContainer">
                    <button onMouseDown={this.handleTelechargement} id="telechargement">TÉLÉCHARGER</button>
                    <button onMouseDown={this.handlePartage} id="partage">PARTAGER</button>
                </div>
                </div>);
        
    }
}

export default Settings;