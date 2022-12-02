import '../../../css/index.css';
import '../../../css/algorithm.css';

function handleOnClick(event) {
    window.location = "/animation/" + event.target.name
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
