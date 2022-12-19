/* 
Nom du fichier  : Form.js
Description     : Navigation entre les algorithmes d'animation
Auteur          : Jessica Chan
Autre étudiant  : Sebastian Perez 
*/

import '../../../css/index.css';
import '../../../css/algorithm.css';

function handleOnClick(event) {
    let animName = event.target.name
    if (!window.location.pathname.includes(animName)) {
        window.location = "/animation/" + animName
    }
}

const AnimationTabs = (props) => {

    return(
        <div className="animation-tabs">
            <button className="dot" onClick={handleOnClick} name="LineRotationAlgorithm"></button>
            <button className="dot" onClick={handleOnClick} name="TriangleBezierCollisionAlgorithm"></button>
            <button className="dot" onClick={handleOnClick} name="BreathingCircleAlgorithm"></button>
            <button className="dot" onClick={handleOnClick} name="TestAlgorithm"></button>
        </div>
    );
        
    }

export default AnimationTabs;
