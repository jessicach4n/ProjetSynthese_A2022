/* 
Nom du fichier  : Register.js
Description     : Composant React de la page 'Inscription'.
Auteur          : Jessica Chan
Autre étudiant  : Sebastian Perez 
*/

import '../css/index.css'
import FormRegister from './components/form/FormRegister'

function Register() {
  return (
    <div className="register">
        <section>
            <FormRegister/>
            <h1>Inscrip<br/>tion</h1>
        </section>
    </div>
  );
}

export default Register;
