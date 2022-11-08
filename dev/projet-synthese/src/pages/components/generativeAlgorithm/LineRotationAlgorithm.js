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
            let heigth = window.innerWidth - 250
           
            let pointCentral = {x : window.innerWidth/2, y : window.innerHeight/2}
            let lineCircleRadius = 100 //WHAT?! try 100
            let linePoint1 = {x : 350, y :  350}
            let linePoint2 = {x : window.innerWidth/3, y : 250}
            let debugMode = 0
            

  
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
                p5.ellipseMode(p5.CENTER);
                let iterationStep = p5.PI/10

                for(let i = 0 ;  i < p5.TWO_PI ; i += iterationStep){
                    let rotation =  ( i + p5.frameCount / 300) * p5.TWO_PI
                    let lenghtFromRefencePoint = 100
                    let rotationSpeed = 200
                    // let rotationSpeed = (p5.sin(-p5.frameCount / 130 * p5.TWO_PI) + 1 ) /2 * 500
                    let x = p5.cos(-p5.frameCount / rotationSpeed * p5.TWO_PI) * lenghtFromRefencePoint
                    let y = p5.sin(-p5.frameCount / rotationSpeed * p5.TWO_PI) * lenghtFromRefencePoint
                    let h = (p5.sin(-p5.frameCount / 130 * p5.TWO_PI) + 2 ) /2 * 360
                    // lineCircleRadius = (p5.sin(-p5.frameCount / 130 * p5.TWO_PI) +1 ) /2 * 360

                    
                    // p5.colorMode(p5.HSB , 360, 100 , 100)
                    // p5.fill(h,100, 100)
                    
                    //make the line turn en reference du point line point 1 
                    // linePoint1.x = pointCentral.x + x + lineCircleRadius * p5.cos(rotation)
                    // linePoint1.y = pointCentral.y + y +  lineCircleRadius * p5.sin(rotation)
                    if(debugMode){
                        p5.line( linePoint1.x + x +lineCircleRadius * p5.cos(rotation), 
                        linePoint1.y + y + lineCircleRadius * p5.sin(rotation), 
                        linePoint1.x - x +lineCircleRadius * p5.cos(rotation), 
                        linePoint1.y - y + lineCircleRadius * p5.sin(rotation), )
                        p5.fill("red")   
                        p5.ellipse(linePoint1.x, linePoint1.y,25,25)
                    }
                    if(!debugMode){
                        p5.colorMode(p5.HSB, 360)
                        p5.stroke(p5.color(h,360,360))
                        // pointCentral.x = p5.cos(-p5.frameCount / rotationSpeed * p5.PI) * lenghtFromRefencePoint
                        // pointCentral.y = p5.sin(-p5.frameCount / rotationSpeed * p5.PI) * lenghtFromRefencePoint
                        p5.line( pointCentral.x + x +lineCircleRadius * p5.cos(rotation), 
                        pointCentral.y + y + lineCircleRadius * p5.sin(rotation), 
                        pointCentral.x - x +lineCircleRadius * p5.cos(rotation), 
                        pointCentral.y - y + lineCircleRadius * p5.sin(rotation), )
                    }
                   

                    //TEST for making sin radius --------------------------------------
                    if (debugMode){
                        let ellipseRadius = (p5.sin(p5.frameCount / 100 * p5.TWO_PI) +1 ) / 2 * 250 + 50
                        let radius  = (p5.sin(p5.frameCount / 100 * p5.TWO_PI) +1 ) / 2 * 250 + 50
                        linePoint2.x = pointCentral.x + x
                        linePoint2.y = pointCentral.y + y
                        p5.fill('blue')
                        p5.ellipse(linePoint2.x + (ellipseRadius) * p5.cos(rotation) , 
                        linePoint2.y + (ellipseRadius) * p5.sin(rotation),25,25)
                    }
                      
                    //TEST---------------------------------------------


                //     DO NOT ERASE SHOW JEAN-CRISTOPHE
                    // p5.ellipse(pointCentral.x + x + lineCircleRadius * p5.cos(rotation), 
                    //             pointCentral.y + y +  lineCircleRadius * p5.sin(rotation), 
                    //             25, 25)
                    // p5.fill("red")
                    // p5.ellipse(pointCentral.x + x + (radius) * p5.cos(rotation) , 
                    // pointCentral.y + y +(radius)* p5.sin(rotation) ,25,25) 
                }
                p5.fill('green')
                if (debugMode)
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