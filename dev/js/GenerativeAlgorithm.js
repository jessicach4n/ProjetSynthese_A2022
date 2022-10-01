export default class GenerativeAlgorithm {
    
    constructor( ) {
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

    setup(){
        throw new Error('Method "setup()" must be implemented in a sub class.')
    }
    
    draw(){
        throw new Error('Method "draw()" must be implemented in a sub class.')
    }
    
    callAPI(){
        throw new Error('Method "callAPI()" must be implemented in a sub class.')
    }
    
    assignUserVariables(){
        throw new Error('Method "assignUserVariables()" must be implemented in a sub class.')
    }
}

//this will be a different class in a different document. 
//export { constructor };
  

  


