import { Outlet, Link } from "react-router-dom";
import '../../css/index.css';
import * as myConstants from '../constants.js'

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
      method : 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(res => {
        logout(res);
    })
  }

const Navigation = () => {
    let nav = null
    if (window.sessionStorage.getItem("session_id") == null)
    {
        nav = <>
                <Link to="/">
                    <img src="/logo-white.svg" alt="Logo du site web" id="logo"/>
                </Link>
                <nav className="header-menu">
                    <ul>
                        <li><Link to="/animation">Animation</Link></li>
                    </ul>
                    <ul>
                        <li><Link to="/a-propos">À propos</Link></li>
                    </ul>
                    <ul>
                        <li><Link to="/connexion">Connexion</Link></li>
                    </ul>
                </nav>
                <Outlet/>
            </>
    }
    else
    {
        nav = <>
                <Link to="/">
                    <img src="/logo-white.svg" alt="Logo du site web" id="logo"/>
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
                            <li onClick={handleLogout}>Déconnexion</li>
                        </ul>
                    </nav>
                <Outlet/>
            </>
    }

    return nav;
}

export default Navigation;
