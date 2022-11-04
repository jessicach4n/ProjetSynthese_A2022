import { Outlet, Link } from "react-router-dom";
import '../../css/index.css';
import logowhite from '../../logo/logo-white.svg'
import * as myConstants from '../constants.js'

function handleLogout(event) {
    event.preventDefault();
    let formData = new FormData()
    formData.append('logout', true)
    formData.append('session_id', window.sessionStorage.getItem("session_id"))
    
    fetch(myConstants.HOST + '/navigation.php', {
      method : 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(res => {
      if (!res.isLoggedIn) {
        window.sessionStorage.removeItem("session_id")
        window.location = '/'
      }
    })
  }

const Navigation = () => {
    let isLoggedIn = false;
    if (window.sessionStorage.getItem("session_id") != null)
    {
        isLoggedIn = true
    }
    
    let navInvite = <>
                        <Link to="/">
                            <img src={logowhite} alt="Logo du site web" id="logo"/>
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
    let navMembre = <>
                        <Link to="/">
                            <img src={logowhite} alt="Logo du site web" id="logo"/>
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
    
    if (isLoggedIn) {
        return (navMembre)
    }
    return(navInvite)        
    }

export default Navigation;
