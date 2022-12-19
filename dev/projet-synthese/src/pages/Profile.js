/* 
Nom du fichier  : Profile.js
Description     : Composant React de la page 'Profil'.
Auteur          : Jessica Chan
Autre étudiant  : Sebastian Perez 
*/

import '../css/index.css';
import '../css/profile.css';
import CardHolder from './components/CardHolder';
import StatsUser from './components/StatsUser';

function Profile() {  
    return (    
        <div className="profile">
            <h1>Votre profil</h1>
            <StatsUser/>
            <h2>Mes animations</h2>
            <section className="my-animations">
                <CardHolder page={"profile"}/>
            </section>
        </div>
    );
}

export default Profile;