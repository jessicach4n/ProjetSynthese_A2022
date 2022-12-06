import { Outlet, Link } from "react-router-dom";
import '../../css/index.css';
import * as myConstants from '../constants.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'

function logout(res) {
    if (!res.isLoggedIn) {
        window.sessionStorage.removeItem("session_id");
        window.location = '/';
    }
}

function handleLogout(event) {
    event.preventDefault();
    let formData = new FormData();
    formData.append('logout', true);
    formData.append('session_id', window.sessionStorage.getItem("session_id"));

    fetch(myConstants.HOST + '/navigation.php', {
        method: 'POST',
        body: formData
    })
        .then(res => res.json())
        .then(res => {
            logout(res);
        })
}

const Navigation = () => {
    return (<> {myConstants.IS_LOGGED_IN ? (<>
        <Link to="/">
            <img src="/logo-white.svg" alt="Logo du site web" id="logo" />
        </Link>
        <nav className="header-menu">
            <ul>
                <li><Link to="/animation">Animation</Link></li>
            </ul>
            <ul>
                <li><Link to="/a-propos">À propos</Link></li>
            </ul>
            <ul>
                <li><Link to="/partages">Partages</Link></li>
            </ul>
            <ul>
                <li><Link to="/profil">Profil</Link></li>
            </ul>
            <ul>
                <li onClick={handleLogout}><FontAwesomeIcon icon={faArrowRightFromBracket} size="lg"/></li>
            </ul>
        </nav>
        <Outlet />
    </>
    ) : (<>
        <Link to="/">
            <img src="/logo-white.svg" alt="Logo du site web" id="logo" />
        </Link>
        <nav className="header-menu">
            <ul>
                <li><Link to="/animation">Animation</Link></li>
            </ul>
            <ul>
                <li><Link to="/a-propos">À propos</Link></li>
            </ul>
            <ul>
                <li><Link to="/connexion"><FontAwesomeIcon icon={faArrowRightToBracket} size="lg"/></Link></li>
            </ul>
        </nav>
        <Outlet />
    </>
    )
    }
    </>
    )
}

export default Navigation;
