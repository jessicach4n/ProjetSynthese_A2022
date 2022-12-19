import '../css/index.css'
import '../css/loading.css'
import React, { Component } from "react";
import { ProcessorAPI } from "./components/generativeAlgorithm/ProcessorAPI";
import { ProrcessorVariables } from "./components/generativeAlgorithm/ProrcessorVariables";
import * as myConstants from './constants'

class Loading extends Component {
    constructor(props) {
      super(props);

      this.callAPi = this.callAPi.bind(this);
      this.success = this.success.bind(this);
      this.error = this.error.bind(this);
      this.longitude = 0;
      this.latitude = 0;
    }

    success(position){
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.callAPi()
    }

    error(){
        this.latitude = 45.501690
        this.longitude = -73.567253
        this.callAPi()
    }

    componentDidMount() {
        //* REF: https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_geolocation
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.success, this.error);
        }
    }

    callAPi() {
        let formData = new FormData();
        formData.append("session_id", window.sessionStorage.getItem("session_id"));
        formData.append("action", myConstants.GET_EMAIL_NUMBER);
        setTimeout(() => {
            fetch(myConstants.HOST + '/animation.php',{
                method : "POST",
                body : formData
            })
            .then(res => res.json())
            .then(res => {
                sessionStorage.setItem("emailNumber", res.emailNumber)
            })

            fetch(ProcessorAPI.stringCallAPI(this.latitude, this.longitude), {   
                method : "POST",       
                   })
               .then(response => response.json())
               .then(response => {
                let city = ProcessorAPI.extractCity(response);
                let country = ProcessorAPI.extractCountry(response);
                let organisedData = ProcessorAPI.organiseData(response);
                let choices = ProrcessorVariables.createChoices(organisedData);
                let cycleNumberOfMembers = ProrcessorVariables.createCycleNumberOfMembers(choices);
                let breathingNumberOfMembers = ProrcessorVariables.initialization(choices);
                sessionStorage.setItem("breathingNumberOfMembers", breathingNumberOfMembers)
                sessionStorage.setItem("cycleNumberOfMembers", cycleNumberOfMembers);
                sessionStorage.setItem("city", city);
                sessionStorage.setItem("country", country);
                window.location = "/animation";
               })
        }, 1000);
    }

    render() {
        return (
            <div className='loading'>
                <div className='graphics-container'>
                    <div className='loading-icon'>
                        <img src="/logo-white.svg" alt="Logo du site web"/>
                    </div>
                    <div className='label'>Chargement en cours ...</div>
                </div>
            </div>
          );
    } 
  
}

export default Loading;
