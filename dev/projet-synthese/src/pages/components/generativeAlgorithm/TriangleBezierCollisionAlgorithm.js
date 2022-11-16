import { GenerativeAlgorithm } from './GenerativeAlgorithm';
import { MyAwesomeQueue } from './MyAwesomeQueue';
import { Component } from "react";
import Sketch from "react-p5";

export default class TriangleBezierCollisionAlgorithm extends GenerativeAlgorithm {
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

        //variables propres a l'animation souhaitée 
        // DO NOT ERASE
        // p1Triangle ={x:0, y:0}
        // p2Triangle ={x:0, y:0}
        // p3Triangle ={x:0, y:0}
        // bezierCurvePointA ={x:0, y:0}
        // bezierCurvePointB ={x:0, y:0}
        // bezierCurvePointC ={x:0, y:0}



        //variables used by setup and draw 
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
            let pointsQueue = new MyAwesomeQueue(3)
            pointsQueue.enqueue(1)
            pointsQueue.enqueue(2)
            pointsQueue.enqueue(3)
            pointsQueue.print()

            //TODO trouver 4 possibilités et en faire une queue :
            //* 1: (0,0)        à       (maxW,0)    top  
            //* 2: (maxW,0)     à       (maxW,maxH) right
            //* 3: (maxW,maxH)  à       (0,maxH)    bottom
            //* 4: (0,maxH)     à       (0,0)       left 

  
            const setup = (p5, canvasParentRef) => {

                var cnv = p5.createCanvas(window.innerWidth, window.innerHeight );
                cnv.style("z-index", "-1")
                cnv.position(0,0)
                cnv.id("canvas")
                p5.stroke("black")
                
            }
            
            const draw = (p5) => {
                p5.noStroke()
            
                p5.fill(filColor)
                p5.ellipse(pointInital.x, pointInital.y , 25, 25)
                
                p5.fill('pink')
                p5.ellipse(p1.x, p1.y , 25, 25)
                
                p5.fill('orange')
                p5.ellipse(p2.x, p2.y , 25, 25) 
                
                p5.fill('yellow')
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
        }
        //ENCAPSULATION OF P5
        // REF : https://github.com/processing/p5.js/wiki/Global-and-instance-mode
    
    
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

    findNewBezierTrajectory(){
        console.log("findNewBezierTrajectory method")
    }

    checkCollision(){
     console.log('checkCollision method')   
    }
}

// let test = new TriangleBezierCollisionAlgorithm()
// test.assignUserVariables()