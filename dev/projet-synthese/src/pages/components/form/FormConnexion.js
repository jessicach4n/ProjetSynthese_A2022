/* 
Nom du fichier  : FormConnexion.js
Description     : Composant React et sous-classe de Form, contient le formulaire de connexion.
Auteur          : Jessica Chan
Autre étudiant  : Sebastian Perez 
*/

import '../../../css/index.css'
import '../../../css/forms.css'
import React from "react";
import Form from './Form'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import * as myConstants from '../../constants.js'

class FormConnexion extends Form {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.sessionId = null;
      this.isLoggedIn = false;
    }
  
    getInputs(id) {
      return super.getInputs(id);
    }

    handleLogin() {
      if (this.isLoggedIn) {
        this.connexion();
      }
      else {
        this.afficherErreur();
      }
    }

    connexion() {
      window.sessionStorage.setItem("session_id", this.sessionId);
      window.sessionStorage.setItem("username", this.username);
      window.location = "/loading";
    }

    afficherErreur() {
      let erreurs = document.getElementsByClassName("msg-erreur");
      erreurs.forEach(erreur => {
        erreur.style.display = "block";
      });
      document.getElementById("btn-signin").className = "shake";
      setTimeout(() => {
        document.getElementById("btn-signin").classList.remove("shake");
      }, 500);
    }

    handleSubmit(event) {
      event.preventDefault();
      
      fetch(myConstants.HOST + '/login.php', {
        method : 'POST',
        body: this.getInputs("form-con")
      })
      .then(res => res.json())
      .then(res => {
        this.isLoggedIn = res.isLoggedIn;
        this.sessionId = res.session_id;
        this.username = res.username;
        this.handleLogin();
      })
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit} id="form-con" method="post">
            <div className="msg-erreur"><FontAwesomeIcon icon={faTriangleExclamation} size="sm"/>  Nom d'usager est invalide.</div>
            <input type="text" name="username" placeholder="Nom d'usager" id="log-username" />
            <div className="msg-erreur"><FontAwesomeIcon icon={faTriangleExclamation} size="sm"/>  Mot de passe est invalide.</div>
            <input type="password" name="passwd" placeholder="Mot de passe" id="log-password"/>
            <button type="submit" id="btn-signin">Se connecter</button>
            <Link to="/inscription">
              <li id="log-register">
                  Pas membre? <br/> Créer un compte aujourd'hui
              </li>
            </Link>
        </form>
      );
    }
  }

  export default FormConnexion
