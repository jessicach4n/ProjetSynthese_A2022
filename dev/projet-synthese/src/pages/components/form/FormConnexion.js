import React, { Component } from "react";
import '../../../css/index.css'
import '../../../css/forms.css'
import Form from './Form'
import * as myConstants from '../../constants.js'
import { Link } from "react-router-dom";

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

      // * REF : https://www.freecodecamp.org/news/how-to-get-user-location-with-javascript-geolocation-api/
      const successCallback = (position) => {
        let lat = position.coords.latitude
        let lon = position.coords.longitude
        let data = this.callAPI(lat, lon)
        window.sessionStorage.setItem("city", data['name']);
        window.sessionStorage.setItem("country", data['sys']['country']);
      };
      const errorCallback = (error) => {
        console.log(error);
      };
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback)
      
      window.location = "/loading";
    }

    async callAPI(lat, lon){
      let apiKey = '49a356b49aac954413c95572fdd8c235';  
      let response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&mode=JSO&appid=' + apiKey);
      let data = await response.json();
      return data
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
            <div className="msg-erreur">Nom d'usager est invalide</div>
            <input type="text" name="username" placeholder="Nom d'usager" id="log-username" />
            <div className="msg-erreur">Mot de passe est invalide</div>
            <input type="password" name="passwd" placeholder="Mot de passe" id="log-password"/>
            <button type="submit" id="btn-signin">Se connecter</button>
            <Link to="/inscription">
              <li id="log-register">
                  <a>Pas membre? <br/> Créer un compte aujourd'hui</a>
              </li>
            </Link>
        </form>
      );
    }
  }

  export default FormConnexion
