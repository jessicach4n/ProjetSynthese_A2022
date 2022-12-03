import '../css/index.css'
import '../css/settings.css'
import SettingsContainer from './components/slidingMenu/SettingsContainer';
import BreathingCircleAlgorithm from './components/generativeAlgorithm/BreathingCircleAlgorithm';
import LineRotationAlgorithm from './components/generativeAlgorithm/LineRotationAlgorithm';
import TriangleBezierCollisionAlgorithm from './components/generativeAlgorithm/TriangleBezierCollisionAlgorithm';
import TestAlgorithm from './components/generativeAlgorithm/TestAlgorithm';
import AnimationTabs from './components/generativeAlgorithm/AnimationTabs';

//* REF : https://www.kirupa.com/react/smooth_sliding_menu_react_motion.htm 

function Animation() {
  let animationPage = null

  if (window.location.pathname.includes("TriangleBezierCollisionAlgorithm")) {
    animationPage = <div className="animation">
      <SettingsContainer />
      <AnimationTabs currentPage="TriangleBezierCollisionAlgorithm" />
      <TriangleBezierCollisionAlgorithm />
    </div>
  }
  else if (window.location.pathname.includes("BreathingCircleAlgorithm")) {
    animationPage = <div className="animation">
      <SettingsContainer />
      <AnimationTabs currentPage="BreathingCircleAlgorithm" />
      <BreathingCircleAlgorithm />
    </div>
  }
  else if (window.location.pathname.includes("TestAlgorithm")) {
    animationPage = <div className="animation">
      <SettingsContainer />
      <AnimationTabs currentPage="TestAlgorithm" />
      <TestAlgorithm />
    </div>
  }
  else {
    animationPage = <div className="animation">
      <SettingsContainer />
      <AnimationTabs currentPage="LineRotationAlgorithm" />
      <LineRotationAlgorithm />
    </div>
  }
  return (
    animationPage
  );
}


// * REF : https://www.freecodecamp.org/news/how-to-get-user-location-with-javascript-geolocation-api/
// console.log(navigator.geolocation.getCurrentPosition(successCallback, errorCallback))

// const successCallback = (position) => {
//   console.log(position);
// };

// const errorCallback = (error) => {
//   console.log(error);
// };

export default Animation;