import React, { Component } from "react";
import '../../css/index.css'
import '../../css/forms.css'

// REF : https://reactjs.org/docs/forms.html

class FormRegister extends Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};

    }
  
    render() {
      return (
        <form action="" method="post">
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