import { GenerativeAlgorithm } from './GenerativeAlgorithm';
import { MyAwesomeQueue } from './MyAwesomeQueue';
import {ProcessorSin} from './ProcessorSin';
import {ProcessorCos} from './ProcessorCos';
import { Component } from "react";
import { ProcessorBezier } from './ProcessorBezier';
import Sketch from "react-p5";
import { VideoRecorder } from '../videoRecorder/VideoRecorder';


export default class TriangleBezierCollisionAlgorithm extends GenerativeAlgorithm {
    constructor(props) {
    super(props)
    this.vidLenght = 100;
    this.quality = 0.1
    this.frameRate = 30
    this.canvas = null;
    this.state = {isRecording: false};
    // this.feelsLike
    // this.temperature
    // this.unixTime      
    // this.groundAtmosphericPreassure      
    // this.seaAtmosphericPreassure      
    // this.cloudiness
    // this.averageVisibility      
    // this.humidity    
    }

    render() {

            let t = 0
            let begin = true
            //*SIDES TOP:1 RIGHT:2 BOTTOM:3 LEFT:4 
            let marginOrder = [1,2,3,4]

            let processorBezier = new ProcessorBezier()
            processorBezier.createMembers(3)
            processorBezier.setMiddlePoint()
            let balls = processorBezier.getMembers()
            processorBezier.setOrderMarginPoints(marginOrder)    

            processorBezier.goToNextPoint()
                        
            
            let ballNextPointQueue = new MyAwesomeQueue(4)
            ballNextPointQueue.enqueue(1)
            ballNextPointQueue.enqueue(2)
            ballNextPointQueue.enqueue(3)
            ballNextPointQueue.enqueue(4)
            
            let direction = ballNextPointQueue.getFront()
           
            let newLastPoint = processorBezier.setNexMargintPoint(direction)
            let newfirstPoint = processorBezier.setNexMargintPoint(4)

            // console.log("new last point " + newLastPoint.x)
            let p1 = {x :newfirstPoint.x, y : newfirstPoint.y}
            // let p2 = {x : Math.floor(Math.random() * width), y : Math.floor(Math.random() * height)}
            let p3 = {x : newLastPoint.x, y : newLastPoint.y}

            // pointsQueue.print()
            const setup = (p5) => {
                
                var cnv = p5.createCanvas(this.width, this.height);
                p5.stroke("black")
                this.canvas = cnv.canvas;
                this.videoRecorder = new VideoRecorder(this.quality, this.frameRate, this.canvas, this.vidLenght)

                
            }
            
            const draw = (p5) => {
                p5.noStroke()
            
                for(let member of balls){
                p5.fill('teal')
                p5.ellipse(member.x, member.y , 25, 25)

                p5.fill('orange')
                p5.ellipse(member.p2x, member.p2y , 25, 25) 

                member.x = Math.pow((1-t),2) * p1.x + 2 * (1-t) * t * member.p2x + Math.pow(t,2) * p3.x
                member.y = Math.pow((1-t),2) * p1.y + 2 * (1-t) * t * member.p2y + Math.pow(t,2) * p3.y
            }
                p5.fill('pink')
                p5.ellipse(p1.x, p1.y , 25, 25)
                
                p5.fill('yellow')
                p5.ellipse(p3.x, p3.y , 25, 25) 
                
                if (t < 1 && begin){
                    t+=0.01   
                }
                else{
                    direction = ballNextPointQueue.getFront()
                    ballNextPointQueue.circulatePoints()
                    // let newLastPoint = processorBezier.goToNextPoint
                    let newLastPoint = processorBezier.setNexMargintPoint(direction)
                    p1 = p3
                    for (let member of balls){
                        member.p2x = Math.floor(Math.random() * this.width)
                        member.p2y = Math.floor(Math.random() * this.height)

                    }
                    p3 = {x : newLastPoint.x, y : newLastPoint.y}
                    t=0

                }

            p5.background(255,40);  
            if (this.state.isRecording) {
                this.videoRecorder.record();
            }  

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