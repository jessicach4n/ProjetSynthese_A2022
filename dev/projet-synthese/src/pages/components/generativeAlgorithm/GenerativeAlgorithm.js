import { Component } from "react";

// REF : https://codesandbox.io/s/k09k8knxz5
export class GenerativeAlgorithm extends Component{
    
    constructor(props) {
        super(props);
        if (this.constructor === GenerativeAlgorithm) {
            throw new Error('Class "GenerativeAlgorithm" cannot be instantiated')
          }
          //this is how to give variables to children 
          this.color = "red"
          this.feelsLike = "fels like"
          this.temperature = "temperature"
          this.unixTime = "unixTime"
          this.groundAtmosphericPreassure = "groundAtmosphericPreassure"
          this.seaAtmosphericPreassure = "seaAtmosphericPreassure"
          this.cloudiness = "cloudiness"
          this.averageVisibility = "averageVisibility"
          this.humidity = "humidity"    
    }
    //a revoir si la librairie lel permet 
    setup(){
        throw new Error('Method "setup()" must be implemented in a sub class.')
    }
    
    //a revoir si la librairie lel permet 
    draw(){
        throw new Error('Method "draw()" must be implemented in a sub class.')
    }
    
    callAPI(){
        throw new Error('Method "callAPI()" must be implemented in a sub class.')
    }
    
    assignUserVariables(){
        throw new Error('Method "assignUserVariables()" must be implemented in a sub class.')
    }

    render() {
        return false;
    }
}


//this will be a different class in a different document. 





