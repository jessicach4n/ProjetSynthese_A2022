/* 
Nom du fichier  : Form.js
Description     : Composant React et super-classe pour les formulaires
Auteur          : Jessica Chan
Autre étudiant  : Sebastian Perez 
*/

import '../../../css/index.css'
import '../../../css/forms.css'
import React, { Component } from "react";

export default class Form extends Component {
    constructor(props) {
      super(props);
      if (this.constructor === Form) {
        throw new Error('Class "Form" cannot be instantiated');
      }
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    getInputs(id) {
      let inputs = document.getElementById(id).getElementsByTagName('input');
      let formData = new FormData()
      inputs.forEach(input => {
        let name = input.getAttribute('name');
        let value = input.value;
        formData.append(name, value);
      });
      return formData;
    }
  
    render() {
        return <></>;
    }
  }
