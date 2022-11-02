import { ScrollBar } from './ScrollBar';
class ScrollBarSaturation extends ScrollBar {
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