import '../css/index.css';
import '../css/profile.css';
import StatsUser from './components/StatsUser';
import * as myConstants from './constants.js'

function Profile() {  
    if (!myConstants.IS_LOGGED_IN)
    {
        window.location = "/"
        return
    }
    return (    
        <div className="profile">
            <h1>Votre profil</h1>
            <StatsUser/>
            <div className="onglets">
                <li><a href=""></a>Mes animations</li>
                <li><a href=""></a>Mes vidéos aimées</li>
            </div>
            <section className="my-animations">
                <div></div>
            </section>
            <section className="my-likes">
                <div></div>
            </section>
        </div>
    );
}

export default Profile;