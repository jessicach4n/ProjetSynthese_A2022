import React, { Component } from "react";
import '../../../css/index.css'
import '../../../css/forms.css'

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