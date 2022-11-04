import React, { Component } from "react";
import '../../css/index.css'
import '../../css/forms.css'
import * as myConstants from '../constants.js'

class FormConnexion extends Component {
    constructor(props) {
      super(props);
      this.state = {value : ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      event.preventDefault();
      let formData = new FormData()
      formData.append('username', document.getElementById('log-username').value)
      formData.append('passwd', document.getElementById('log-password').value)
      
      fetch(myConstants.HOST + '/login.php', {
        method : 'POST',
        body: formData
      })
      .then(res => res.json())
      .then(res => {
        window.sessionStorage.setItem("session_id", res.session_id)
        console.log(res)
        if (res.isLoggedIn) {
            window.location = "/Animation"
        }

      })

    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit} method="post">
            <p id="msg-erreur">Mauvais nom d'usager</p>
            <input type="text" name="username" placeholder="Nom d'usager" id="log-username" />
            <p id="msg-erreur">Mauvais mot de passe</p>
            <input type="text" name="passwd" placeholder="Mot de passe" id="log-password"/>
            <button type="submit">Se connecter</button>
            <li id="log-register">
                <a href="register">Pas membre? <br/> Créer un compte aujourd'hui</a>
            </li>
        </form>
      );
    }
  }

  export default FormConnexion