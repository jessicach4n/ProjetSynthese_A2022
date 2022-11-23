import React, { Component } from "react";
import '../../../css/index.css'
import '../../../css/forms.css'
import Form from './Form'
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
        this.afficherErreurConnexion();
      }
    }

    connexion() {
      window.sessionStorage.setItem("session_id", this.sessionId);
      window.location = "/animation";
    }

    afficherErreurConnexion() {
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
        this.handleLogin();
      })
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit} id="form-con" method="post">
            <div className="msg-erreur">Nom d'usager est invalide</div>
            <input type="text" name="username" placeholder="Nom d'usager" id="log-username" />
            <div className="msg-erreur">Mot de passe est invalide</div>
            <input type="password" name="passwd" placeholder="Mot de passe" id="log-password"/>
            <button type="submit" id="btn-signin">Se connecter</button>
            <li id="log-register">
                <a href="register">Pas membre? <br/> Créer un compte aujourd'hui</a>
            </li>
        </form>
      );
    }
  }

  export default FormConnexion
