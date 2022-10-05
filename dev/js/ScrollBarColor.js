import { ScrollBar } from './ScrollBar';
class ScrollBarColor extends ScrollBar {
    constructor() {
    super()
    this.position
    this.maxValue
    this.minValue      
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
        console.log('Method "get position()" ')
        return this._position;
    }
    
    get minValue(){
        console.log('Method "get minValue()" ')
        return this._minValue;
    }
    
    get maxValue(){
        console.log('Method get "maxValue()"')
        return this._maxValue;
    }
    
    set position(chose){
        console.log('Method "set postion()" ')
        this._position = chose
        // this.position = chose;
    }
    
    set minValue(value){
        console.log('Method "set minValue()" ')
        this._minValue = value;
    }
    set maxValue(value){
        console.log('Method "set maxValue()" ')
        this._maxValue = value;
    }

}


//look for how to use a setter and getter 

let test = new ScrollBarColor()
// test.getminValue()