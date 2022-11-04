import { GenerativeAlgorithm } from './GenerativeAlgorithm';
import { Component } from "react";
import Sketch from "react-p5";

export default class LineRotationAlgorithm extends GenerativeAlgorithm {
    constructor(props) {
    super(props)
    // this.feelsLike
    // this.temperature
    // this.unixTime      
    // this.groundAtmosphericPreassure      
    // this.seaAtmosphericPreassure      
    // this.cloudiness
    // this.averageVisibility      
    // this.humidity    
        // creation of the p5 sketch
    }
    render() {

        //variables used by setup and draw 
            let r = 0   
            let g = 0
            let b = 0
         
            let width = window.innerWidth - 250
           
            let pointCentral = {x : window.innerWidth/2, y : window.innerHeight/2}
            let lineCircleRadius = 1 //WHAT?! try 100
            let linePoint1 = {x : 350, y :  350}
            let linePoint2 = {x : window.innerWidth/3, y : 250}

            

  
            const setup = (p5, canvasParentRef) => {
                var cnv = p5.createCanvas(window.innerWidth, window.innerHeight );
                cnv.style("z-index", "-1")
                cnv.position(0,0)
                p5.stroke("black")
            }
            
            const draw = (p5) => {
                p5.stroke(100)
                p5.strokeWeight(5)
                // p5.noStroke()

                for(let i = 0 ;  i < p5.TWO_PI ; i += p5.PI/6){
                    let rotation =  ( i + p5.frameCount / 300) * p5.TWO_PI
                    let lenghtFromRefencePoint = 100
                    let rotationSpeed = 150
                    let x = p5.cos(-p5.frameCount / rotationSpeed * p5.TWO_PI) * lenghtFromRefencePoint
                    let y = p5.sin(-p5.frameCount / rotationSpeed * p5.TWO_PI) * lenghtFromRefencePoint
                    //make the line turn en reference du point line point 1 
                    // linePoint1.x = pointCentral.x + x + lineCircleRadius * p5.cos(rotation)
                    // linePoint1.y = pointCentral.y + y +  lineCircleRadius * p5.sin(rotation)
                    p5.line( linePoint1.x + x +lineCircleRadius * p5.cos(rotation), 
                              linePoint1.y + y + lineCircleRadius * p5.cos(rotation), 
                             linePoint1.x - x +lineCircleRadius * p5.cos(rotation), 
                             linePoint1.y - y + lineCircleRadius * p5.cos(rotation), )
                    p5.fill("red")
                    p5.ellipse(linePoint1.x, linePoint1.y,25,25)


                    // let ellipseRadius = (p5.sin(p5.frameCount / 100 * p5.TWO_PI) +1 ) / 2 * 250 + 50
                    let ellipseRadius = 1
                    linePoint2.x = pointCentral.x + x
                    linePoint2.y = pointCentral.y + y
                    p5.fill("blue")
                    p5.ellipse(linePoint2.x, linePoint2.y,25,25)
                //     DO NOT ERASE SHOW JEAN-CRISTOPHE
                //     p5.ellipse(pointCentral.x + x + lineCircleRadius * p5.cos(rotation), 
                //                 pointCentral.y + y +  lineCircleRadius * p5.sin(rotation), 
                //                 25, 25)
                }
                p5.fill('green')
                p5.ellipse(pointCentral.x, pointCentral.y,  25, 25)
                


                

                // p5.line(p5.cos(p5.frameCount /100 * p5.TWO_PI) * lineCircleRadius, p5.sin(p5.frameCount /100 * p5.TWO_PI) * lineCircleRadius, pointCentral.x, pointCentral.y)
                
                
                
                p5.noStroke()


            p5.background(r,g,b,40);
            }
            return (<Sketch setup={setup} draw={draw}/>);
        }
    //     //ENCAPSULATION OF P5
    //     // REF : https://github.com/processing/p5.js/wiki/Global-and-instance-mode
    
    callAPI(){
        console.log("call api")
    }

    assignUserVariables(){
        //testing heritage
        console.log("assig variables")
        console.log( 
            "fells like  "+ this.feelsLike +  "\n" +
            'temperature         ' + this.temperature+ "\n" +
            'unixtime         ' + this.unixTime + "\n" +
            'groundAtmosphericPreassure         ' + this.groundAtmosphericPreassure+ "\n" +
            'seaAtmosphericPreassure         ' + this.seaAtmosphericPreassure+ "\n" +
            'cloudiness         ' + this.cloudiness+ "\n" +
            'ave           ' + this.averageVisibility+ "\n" +
            'humidity          ' + this.humidity
            
        ) 
    }

    createGradientOnBar(){
        console.log('createGradientOnBar method')   
    }
}

// let test = new LineRotationAlgorithm()
// test.callAPI()


//   REF : https://sandromiguel.com/abstract-class-and-method-in-javascript/