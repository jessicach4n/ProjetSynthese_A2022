/* 
Nom du fichier  : Animation.js
Description     : Composant React de la page 'Animation'.
Auteur          : Jessica Chan
Autre étudiant  : Sebastian Perez 
*/

import '../css/index.css'
import '../css/settings.css'
import SettingsContainer from './components/slidingMenu/SettingsContainer';
import BreathingCircleAlgorithm from './components/generativeAlgorithm/BreathingCircleAlgorithm';
import TriangleBezierCollisionAlgorithm from './components/generativeAlgorithm/TriangleBezierCollisionAlgorithm';
import PolygonAlgorithm from './components/generativeAlgorithm/PolygonAlgorithm';
import AnimationTabs from './components/generativeAlgorithm/AnimationTabs';
import Message from './components/Message';

// REF : https://www.kirupa.com/react/smooth_sliding_menu_react_motion.htm 

function Animation() {
  let animationPage = null

  if (window.location.pathname.includes("PolygonAlgorithm")) {
    animationPage = <PolygonAlgorithm />
  }
  else if (window.location.pathname.includes("BreathingCircleAlgorithm")) {
    animationPage = <BreathingCircleAlgorithm />
  }
  else {
    animationPage = <TriangleBezierCollisionAlgorithm />
  }
  return (
    <div className="animation">
    <Message />
    <SettingsContainer />
    <AnimationTabs/>
    {animationPage}
    </div>
  );
}

export default Animation;