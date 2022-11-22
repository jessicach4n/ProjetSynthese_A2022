import '../css/index.css'
import '../css/settings.css'
import SettingsContainer from './components/slidingMenu/SettingsContainer';
import BreathingCircleAlgorithm from './components/generativeAlgorithm/BreathingCircleAlgorithm';
import LineRotationAlgorithm from './components/generativeAlgorithm/LineRotationAlgorithm';
import TriangleBezierCollisionAlgorithm from './components/generativeAlgorithm/TriangleBezierCollisionAlgorithm';
import TestAlgorithm from './components/generativeAlgorithm/TestAlgorithm';
import AnimationTabs from './components/generativeAlgorithm/AnimationTabs';

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
                      <TriangleBezierCollisionAlgorithm/>
                    </div>
  }
  else if (window.location.pathname.includes("BreathingCircleAlgorithm")) {
    animationPage = <div className="animation">
                      <SettingsContainer/>
                      <AnimationTabs/>
                      <BreathingCircleAlgorithm/>
                    </div>
  }
  else if (window.location.pathname.includes("TestAlgorithm")) {
    animationPage = <div className="animation">
                      <SettingsContainer/>
                      <AnimationTabs/>
                      <TestAlgorithm/>
                    </div>
  }
  else {
    animationPage = <div className="animation">
                      <SettingsContainer/>
                      <AnimationTabs/>
                      <LineRotationAlgorithm/>
                      {/* REMOVE LATER */}
                      <video width="320" height="240px" controls>
                        <source type='video/mp4'></source>
                      </video>
                    </div>
  }
  return (
    animationPage
  );
}

export default Animation;