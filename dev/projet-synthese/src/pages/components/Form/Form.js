import React, { Component } from "react";
import '../../../css/index.css'
import '../../../css/forms.css'

export default class Form extends Component {
    constructor(props) {
      super(props);
      if (this.constructor === Form) {
        throw new Error('Class "Form" cannot be instantiated')
      }
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    getInputs() {
      let inputs = document.getElementById('form').getElementsByTagName('input');
      let formData = new FormData()
      inputs.forEach(input => {
        let name = input.getAttribute('name')
        let value = input.value
        console.log(name + " " + value)
        formData.append(name, value)
      });
      return formData
    }

    handleSubmit(event) {
    //   event.preventDefault();
      
    //   fetch(myConstants.HOST + '/login.php', {
    //     method : 'POST',
    //     body: this.getInputs()
    //   })
    //   .then(res => res.json())
    //   .then(res => {
    //     window.sessionStorage.setItem("session_id", res.session_id)
    //     console.log(res)
    //     if (res.isLoggedIn) {
    //         window.location = "/Animation"
    //     }

    //   })

    }
  
    render() {
        return <></>
    }
  }