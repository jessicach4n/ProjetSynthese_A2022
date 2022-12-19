/* 
Nom du fichier  : Login.js
Description     : Composant React de la page 'Connexion'.
Auteur          : Jessica Chan
Autre étudiant  : Sebastian Perez 
*/

import '../css/index.css'
import '../css/home.css'
import FormConnexion from './components/form/FormConnexion'

function Login() {
  return (
    <div className="login">
        <section>
        <h1>Bien<br/>venue</h1>
        <FormConnexion/>
        </section>
    </div>
  );
}

export default Login;
