import { Outlet, Link } from "react-router-dom";
import '../../../css/index.css';
import '../../../css/algorithm.css';
const AnimationTabs = () => {
    return(
        <nav className="dots">
            {/* CHANGE TO BUTTONS JSX */}
            <ul>
                <li className="dot">
                    <Link to="/animation/breathing-circle"> </Link>
                </li>
            </ul>
            <ul>
                <li className="dot">
                    <Link to="/animation/line-rotation"> </Link>
                </li>
            </ul>
            <ul>
                <li className="dot">
                    <Link to="/animation/triangle-bezier"> </Link>
                </li>
            </ul>
            <Outlet/>
        </nav>
        
    );
        
    }

export default AnimationTabs;
