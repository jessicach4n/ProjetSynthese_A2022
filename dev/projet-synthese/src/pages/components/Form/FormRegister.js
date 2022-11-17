import React, { Component } from "react";
import '../../../css/index.css'
import '../../../css/forms.css'
import Form from './Form'
import * as myConstants from '../../constants.js'

// REF : https://reactjs.org/docs/forms.html

class FormRegister extends Form {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.success = false;
    }

    getInputs(id) {
        return super.getInputs(id);
    }

    register() {
      if (this.success) {
        window.location = "/connexion";
      }
    }

    handleSubmit(event) {
      event.preventDefault();

      fetch(myConstants.HOST + '/register.php', {
        method : 'POST',
        body: this.getInputs("form-reg")
      })
      .then(res => res.json())
      .then(res => {
        this.success = res.register_success;
        this.register();
      })
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit} id="form-reg" method="post">
          <input type="text" name="username" placeholder="Nom d'usager" id="reg-username" required/>
          <input type="text" name="lastName" placeholder="Nom" id="reg-nom" required/>
          <input type="text" name="firstName" placeholder="Prenom" id="reg-prenom" required/>
          <input type="email" name="email" placeholder="Email" id="reg-email" required/>
          <input type="text" name="passwd" placeholder="Mot de passe" id="reg-password" required/>
          <input type="date" min="1900-01-01" name="DoB" placeholder="Date de naissance" id="reg-datenaissance" required/>
          <button type="submit">Joindre la communauté</button>
        </form>
      );
    }
  }

  export default FormRegister