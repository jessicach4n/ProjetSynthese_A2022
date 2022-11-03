import { Component } from "react";
import Sketch from "react-p5";
import { GenerativeAlgorithm } from './GenerativeAlgorithm';

export default class BreathingCircleAlgorithm extends GenerativeAlgorithm {
    constructor(props) {
    super(props);
    // this.feelsLike 
    // this.temperature
    // this.unixTime      
    // this.groundAtmosphericPreassure      
    // this.seaAtmosphericPreassure      
    // this.cloudiness
    // this.averageVisibility      
    // this.humidity    
        // creation of the p5 sketch

        //variables used by setup and draw 
    }
    render() {
            let r = 0   
            let g = 0
            let b = 0
            let filColor = "teal"
            let width = window.innerWidth - 250
            let height = window.innerHeight - 250
            let p1 = {x : Math.floor(Math.random() * width), y : Math.floor(Math.random() * width)}
            let p2 = {x : Math.floor(Math.random() * width), y : Math.floor(Math.random() * width)}
            let p3 = {x : Math.floor(Math.random() * width), y : Math.floor(Math.random() * width)}
            let t = 0
            let begin = true
            let pointInital  = {x :150, y : 120}
  
            const setup = (p5, canvasParentRef) => {

                var cnv = p5.createCanvas(window.innerWidth, window.innerHeight );
                cnv.style("z-index", "-1")
                cnv.position(0,0)
                p5.stroke("black")
            }
            
            const draw = (p5) => {
                p5.noStroke()
            
                p5.fill(filColor)
                p5.ellipse(pointInital.x, pointInital.y , 25, 25)
                
                p5.fill('white')
                p5.ellipse(p1.x, p1.y , 25, 25)
                
                p5.fill('grey')
                p5.ellipse(p2.x, p2.y , 25, 25) 
                
                p5.fill('green')
                p5.ellipse(p3.x, p3.y , 25, 25) 
                
                pointInital.x = Math.pow((1-t),2) * p1.x + 2 * (1-t) * t * p2.x + Math.pow(t,2) * p3.x
                pointInital.y = Math.pow((1-t),2) * p1.y + 2 * (1-t) * t * p2.y + Math.pow(t,2) * p3.y
                
                if (t < 1 && begin){
                    t+=0.01
                }
                else{
                    t-= 0.01
                    begin = false
            
                    if (t < -0.01 ){
                        begin = true 
                        t+=0.01
                    }
                }
            p5.background(r,g,b,40);
            }
        return (<Sketch setup={setup} draw={draw}/>);
    //     //ENCAPSULATION OF P5
    //     // REF : https://github.com/processing/p5.js/wiki/Global-and-instance-mode
    }
    
    callAPI(){
        console.log("call api")
    }

    assignUserVariables(){
        //testing heritage
        console.log("assig variables")
        
    }

    colorFromSize(){
        console.log('colorFromSize method')
    }

    createShapeOfCircles(){
        console.log('createShapeOfCircles method')
    }

    translateSmallCircles(){
        console.log('translateSmallCircles method')
    }

    ChangeColorSmallCircles(){
        console.log('ChangeColorSmallCircles method')
    }
    
}

// let test = new BreathingCircleAlgorithm()
// console.log(test.humidity) 


// export default BreathingCircleAlgorithm;