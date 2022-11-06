import '../css/index.css'
import '../css/settings.css'
import SettingsContainer from './components/slidingMenu/SettingsContainer';
import BreathingCircleAlgorithm from './components/generativeAlgorithm/BreathingCircleAlgorithm';
import LineRotationAlgorithm from './components/generativeAlgorithm/LineRotationAlgorithm';
import TriangleBezierCollisionAlgorithm from './components/generativeAlgorithm/TriangleBezierCollisionAlgorithm';
import AnimationTabs from './components/generativeAlgorithm/AnimationTabs';
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* REF : https://www.kirupa.com/react/smooth_sliding_menu_react_motion.htm */

function Animation() {
  let animationPage = null
  if (window.location.pathname.includes("LineRotationAlgorithm")) {
    animationPage = <div className="animation">
                      <SettingsContainer/>
                      <AnimationTabs/>
                      <LineRotationAlgorithm/>
                    </div>
  }
  else if (window.location.pathname.includes("TriangleBezierCollisionAlgorithm")) {
    animationPage = <div className="animation">
                      <SettingsContainer/>
                      <AnimationTabs/>
                      <LineRotationAlgorithm/>
                      <TriangleBezierCollisionAlgorithm/>
                    </div>
  }
  else if (window.location.pathname.includes("BreathingCircleAlgorithm")) {
    animationPage = <div className="animation">
                      <SettingsContainer/>
                      <AnimationTabs/>
                      <LineRotationAlgorithm/>
                      <BreathingCircleAlgorithm/>
                    </div>
  }
  else {
    animationPage = <div className="animation">
                      <SettingsContainer/>
                      <AnimationTabs/>
                      <LineRotationAlgorithm/>
                    </div>
  }
  return (
    animationPage
  );
}

export default Animation;