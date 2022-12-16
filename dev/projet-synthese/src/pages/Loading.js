import React, { Component } from "react";
import '../css/index.css'
import '../css/loading.css'

class Loading extends Component {
    constructor(props) {
      super(props);
        this.dataReceived = false
    }

    componentDidMount() {
        if (this.dataReceived) {
            window.location = "/animation"
        }
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
