import '../css/index.css'
import '../css/settings.css'
import SettingsContainer from './components/slidingMenu/SettingsContainer';
import BreathingCircleAlgorithm from './components/generativeAlgorithm/BreathingCircleAlgorithm';
import LineRotationAlgorithm from './components/generativeAlgorithm/LineRotationAlgorithm';
import TriangleBezierCollisionAlgorithm from './components/generativeAlgorithm/TriangleBezierCollisionAlgorithm';
import AnimationTabs from './components/generativeAlgorithm/AnimationTabs';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Animation() {
  return (
    <div className="animation">
        {/* REF : https://www.kirupa.com/react/smooth_sliding_menu_react_motion.htm */}
        <SettingsContainer/>
        <AnimationTabs/>
        <LineRotationAlgorithm/>
        {/* <TriangleBezierCollisionAlgorithm/> */}
        {/* <BreathingCircleAlgorithm/> */}
    </div>
  );
}

export default Animation;