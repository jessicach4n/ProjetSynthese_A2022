/* 
Nom du fichier  : NotFound.js
Description     : Composant React de la page 'NotFound'. Cette page représente la page 404.
Auteur          : Jessica Chan
Autre étudiant  : Sebastian Perez 
*/

import '../css/index.css'
import '../css/notfound.css'

function NotFound() {
  return (
    <div className='oops'>
        404
        <div className='pas-de-panique'>La page est introuvable</div>
    </div>
  );
}

export default NotFound;
