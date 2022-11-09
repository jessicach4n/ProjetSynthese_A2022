import React, { Component } from "react";
import '../../../css/index.css'
import '../../../css/forms.css'
import Form from './Form'
import * as myConstants from '../../constants.js'

class FormConnexion extends Form {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    getInputs(id) {
      return super.getInputs(id)
    }

    handleSubmit(event) {
      event.preventDefault();
      
      fetch(myConstants.HOST + '/login.php', {
        method : 'POST',
        body: this.getInputs("form-con")
      })
      .then(res => res.json())
      .then(res => {
        window.sessionStorage.setItem("session_id", res.session_id)
        console.log(res)
        if (res.isLoggedIn) {
            window.location = "/animation"
        }

      })

    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit} id="form-con" method="post">
            <p id="msg-erreur">Mauvais nom d'usager</p>
            <input type="text" name="username" placeholder="Nom d'usager" id="log-username" />
            <p id="msg-erreur">Mauvais mot de passe</p>
            <input type="password" name="passwd" placeholder="Mot de passe" id="log-password"/>
            <button type="submit">Se connecter</button>
            <li id="log-register">
                <a href="register">Pas membre? <br/> Créer un compte aujourd'hui</a>
            </li>
        </form>
      );
    }
  }

  export default FormConnexion