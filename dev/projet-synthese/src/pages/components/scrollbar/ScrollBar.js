export class ScrollBar {
    
    constructor( ) {
        if (this.constructor === ScrollBar) {
            throw new Error('Class "ScrollBar" cannot be instantiated')
          }
          //this is how to give variables to children 
          this.position = 0
          this.maxValue = 100.0
          this.minValue = 100.0      
    }
    //a revoir si la librairie lel permet 
    onMouseMove(){
        throw new Error('Method "onMouseMove()" must be implemented in a sub class.')
    }
    
    //a revoir si la librairie lel permet 
    onMouseStop(){
        throw new Error('Method "onMouseStop()" must be implemented in a sub class.')
    }
    
    onClick(){
        throw new Error('Method "onClick()" must be implemented in a sub class.')
    }
    
    get position(){
        throw new Error('Method "get position()" must be implemented in a sub class.')
    }
    
    get minValue(){
        throw new Error('Method "get minValue()" must be implemented in a sub class.')
    }

    get maxValue(){
        throw new Error('Method "get maxValue()" must be implemented in a sub class.')
    }

    set position(value){
        throw new Error('Method "set position()" must be implemented in a sub class.')
    }
    
    set minValue(value){
        throw new Error('Method "set minValue()" must be implemented in a sub class.')
    }
    set maxValue(value){
        throw new Error('Method "set maxValue()" must be implemented in a sub class.')
    }


}



//getter and setter 
// class Form{
//     set foo(val){
//       console.log("setting foo")
//       this.fooValue = val;
//     }
    
//     get foo(){
//        console.log("getting foo");
//        return this.fooValue;
//     }
//   }
  
//   let frm = new Form();
//   frm.foo = "bar";
//   console.log(frm.foo);

// REF : https://stackoverflow.com/questions/49895080/javascript-class-getter-setter

//this will be a different class in a different document. 

  

  


