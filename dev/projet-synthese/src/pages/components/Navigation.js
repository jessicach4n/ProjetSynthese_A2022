import { Outlet, Link } from "react-router-dom";
import '../../css/index.css';
import logowhite from '../../logo/logo-white.svg'

const Navigation = () => {
    return(
        <>
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
                    <li><Link to="/deconnexion">Déconnexion</Link></li>
                </ul>
                <ul>
                    <li><Link to="/connexion">Connexion</Link></li>
                </ul>
            </nav>
            <Outlet/>
        </>
        
    );
        
    }

export default Navigation;
