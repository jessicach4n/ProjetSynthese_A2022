import { Outlet, Link } from "react-router-dom";
import '../../../css/index.css';
import '../../../css/algorithm.css';

// function handleOnClick(event) {

// }

const AnimationTabs = () => {

    return(
        <nav className="dots">
            <ul>
                <li className="dot">
                </li>
            </ul>
            <ul>
                <li className="dot">
                </li>
            </ul>
            <ul>
                <li className="dot">
                </li>
            </ul>
            <Outlet/>
        </nav>
    );
        
    }

export default AnimationTabs;
