import '../css/index.css';
import '../css/profile.css';
import CardHolder from './components/CardHolder';
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
            </div>
            <section className="my-animations">
                <CardHolder page={"profile"}/>
            </section>
        </div>
    );
}

export default Profile;