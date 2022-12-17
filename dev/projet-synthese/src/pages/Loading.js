import React, { Component } from "react";
import '../css/index.css'
import '../css/loading.css'
import { ProcessorAPI } from "./components/generativeAlgorithm/ProcessorAPI";
import { ProrcessorVariables } from "./components/generativeAlgorithm/ProrcessorVariables";
import * as myConstants from './constants'




class Loading extends Component {
    constructor(props) {
      super(props);
        this.dataReceived = false
    }

    componentDidMount() {
        let formData = new FormData();
        setTimeout(() => {
            // fetch(myConstants.HOST + '/animation.php',{
            //     method : "POST",
            //     body : formData
            // })
            // .then(res => res.json())
            // .then(res => {
            //     console.log('this is res : ' + res)
            // })


            fetch(ProcessorAPI.stringCallAPI(45.501690,-73.567253), {   
                method : "POST",       
                   })
               .then(response => response.json())
               .then(response => {
                console.log("this is "+ JSON.stringify(response));
                let city = ProcessorAPI.extractCity(response);
                let country = ProcessorAPI.extractCountry(response);
                let organisedData = ProcessorAPI.organiseData(response)
                let cycleNumberOfMembers = ProrcessorVariables.createCycleNumberOfMembers(organisedData)
                sessionStorage.setItem("cycleNumberOfMembers", cycleNumberOfMembers);
                sessionStorage.setItem("city", city);
                sessionStorage.setItem("country", country);
                // window.location = "/animation"
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
