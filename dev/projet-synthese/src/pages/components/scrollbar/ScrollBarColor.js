import { ScrollBar } from './ScrollBar';
class ScrollBarColor extends ScrollBar {
    constructor() {
    super()      
    }

    onMouseMove(){
        console.log('Method "onMouseMove()" ')
    }
    
    //a revoir si la librairie lel permet 
    onMouseStop(){
        console.log('Method "onMouseStop()" ')
    }
    
    onClick(){
        console.log('Method "onClick()" ')
    }
    
    get position(){
        return this._position;
    }
    
    get minValue(){
        return this._minValue;
    }
    
    get maxValue(){
        return this._maxValue;
    }
    
    set position(value){
         this._position = value
    }
    
    set minValue(value){
        this._minValue = value;
    }
    set maxValue(value){
        this._maxValue = value;
    }

}

//HOW TO USE SETTERS AND GETTERS 
// this.position = getter 
// this.position = 25 = setter 
//look for how to use a setter and getter 
// REF : https://www.w3schools.com/Js/js_object_accessors.asp#:~:text=JavaScript%20Accessors%20(Getters%20and%20Setters,Object%20Accessors%20(Computed%20Properties).


