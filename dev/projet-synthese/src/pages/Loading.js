import React, { Component } from "react";
import '../css/index.css'
import '../css/loading.css'
import { ProcessorAPI } from "./components/generativeAlgorithm/ProcessorAPI";
import { ProrcessorVariables } from "./components/generativeAlgorithm/ProrcessorVariables";
import * as myConstants from './constants'

class Loading extends Component {
    constructor(props) {
      super(props);

    }

    componentDidMount() {
        let latitude;
        let longitude;
        //* REF: https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_geolocation
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, error);
        }
            
            
        function success(position){
            latitude = position.coords.latitude;
            longitude = position.coords.longitude;
            console.log("Lat succes: " + latitude);
            console.log("Lon : succes " + longitude);
        }

        function error(){
            console.log('error happened');
            //* Donwtown Montreal Location 
            latitude = 45.501690
            longitude = -73.567253
        }

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
                console.log('this is res : ' + res.emailNumber)
                sessionStorage.setItem("emailNumber", res.emailNumber)
            })

            fetch(ProcessorAPI.stringCallAPI(latitude,longitude), {   
                method : "POST",       
                   })
               .then(response => response.json())
               .then(response => {
                // console.log("this is "+ JSON.stringify(response));
                let city = ProcessorAPI.extractCity(response);
                let country = ProcessorAPI.extractCountry(response);
                let organisedData = ProcessorAPI.organiseData(response)
                let cycleNumberOfMembers = ProrcessorVariables.createCycleNumberOfMembers(organisedData)
                sessionStorage.setItem("cycleNumberOfMembers", cycleNumberOfMembers);
                sessionStorage.setItem("city", city);
                sessionStorage.setItem("country", country);
                window.location = "/animation"
               })
        }, 1000);
    }

    render() {
        // if (!myConstants.IS_LOGGED_IN) {
        //     window.location = "/";
        // }
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
