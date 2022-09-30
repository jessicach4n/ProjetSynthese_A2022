class GenerativeAlgorithm {
    
    constructor( ) {
        if (this.constructor === GenerativeAlgorithm) {
            throw new Error('Class "GenerativeAlgorithm" cannot be instantiated')
          }
          //this is how to give variables to children 
          this.color = "red"
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
  class algo1 extends GenerativeAlgorithm {
    constructor() {
      super()
      this.color      
    }
    setup() {
        console.log("set up")
    }
    
    draw(){
        console.log("draw")
    }
    
    callAPI(){
        console.log("call api")
    }
    
    assignUserVariables(){
        console.log("assig variables")
        console.log( "colro "+this.color) 
    }
  }
  
  //testing purposes. 
  let  alg = new algo1()
  alg.assignUserVariables()

  


