import { GenerativeAlgorithm } from './GenerativeAlgorithm';
import { MyAwesomeQueue } from './MyAwesomeQueue';
import {ProcessorSin} from './ProcessorSin';
import {ProcessorCos} from './ProcessorCos';
import { Component } from "react";
import { ProcessorBezier } from './ProcessorBezier';
import Sketch from "react-p5";
import { VideoRecorder } from '../videoRecorder/VideoRecorder';
import * as myConstants from '../../constants'

//TODO: create call api class 
//TODO: create dao request for gettin eamil nunmber 
//TODO: create choice picker for the choice 
//TODO: find get positio laitutde and longitude from code. animaiton.js

export default class TriangleBezierCollisionAlgorithm extends GenerativeAlgorithm {
    constructor(props) {
    super(props)
    this.vidLenght = 100;
    this.quality = 0.1
    this.frameRate = 30
    this.canvas = null;
    this.callAPI()
    }
    render() {

            let t = 0;
            let begin = true;
            //*SIDES TOP:1 RIGHT:2 BOTTOM:3 LEFT:4 
            let marginOrder = [1,2,3,4];
            let processorBezier = new ProcessorBezier();
            processorBezier.setPaddingX(12.5);
            processorBezier.setPaddingY(12.5);
            processorBezier.setCycleNumberOfMembers([1,2,3])
            processorBezier.updateBallNumer();
            processorBezier.setOrderMarginPoints(marginOrder);    

            let direction = processorBezier.queue.getFront();
            processorBezier.goToNextPoint();

           
            let newLastPoint = processorBezier.setNexMargintPoint(direction);
            let newfirstPoint = processorBezier.setNexMargintPoint(4);

            let p1 = {x :newfirstPoint.x, y : newfirstPoint.y};
            let p3 = {x : newLastPoint.x, y : newLastPoint.y};

            const setup = (p5) => {
                var cnv = p5.createCanvas(this.width, this.height);
                p5.stroke("black")
                this.canvas = cnv.canvas;
                super.setup();
            }
            
            const draw = (p5) => {
                p5.noStroke();
                for(let member of processorBezier.getMembers()){
                
                p5.fill('teal');
                p5.ellipse(member.x, member.y , 25, 25);

                p5.fill('orange');
                p5.ellipse(member.p2x, member.p2y , 25, 25);

                member.x = Math.pow((1-t),2) * p1.x + 2 * (1-t) * t * member.p2x + Math.pow(t,2) * p3.x;
                member.y = Math.pow((1-t),2) * p1.y + 2 * (1-t) * t * member.p2y + Math.pow(t,2) * p3.y;
            }
                p5.fill('pink');
                p5.ellipse(p1.x, p1.y , 25, 25);
                
                p5.fill('yellow');
                p5.ellipse(p3.x, p3.y , 25, 25);
                
                if (t < 1 && begin){
                    t+=0.01;  
                }
                else{
                    let newLastPoint = processorBezier.goToNextPoint();
                    processorBezier.updateBallNumer();
                    p1 = p3;
                    p3 = {x : newLastPoint.x, y : newLastPoint.y};
                    t=0;
                }

            p5.background(255,40);  
            super.draw(); 
            }
            return (<Sketch setup={setup} draw={draw}/>);
        }
        //? REF : https://github.com/processing/p5.js/wiki/Global-and-instance-mode
    
    async callAPI(){
        let lat = 45.501690;
        let lon = -73.567253;
        let apiKey = '49a356b49aac954413c95572fdd8c235';
        //*Instead of lon & lat you can put &cityname ex: &london   
        // let response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&mode=JSO&appid={49a356b49aac954413c95572fdd8c235}');
        let response = await fetch('https://api.openweathermap.org/data/2.5/forecast?lat=45.501690&lon=-73.567253&units=metric&cnt=3&mode=JSON&appid=49a356b49aac954413c95572fdd8c235');
        let data = await response.json();
        // myConstants.USERNAME

        console.log(data);
        
        if (myConstants.IS_LOGGED_IN) {
            let formData = new FormData();
            formData.append("session_id", window.sessionStorage.getItem("session_id"));
            fetch(myConstants.HOST + '/animation.php', {
                method : 'POST',
                body : formData
              })
              .then(res => res.json())
              .then(res => {
                console.log(res.emailNumber)
              })
        }
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
}

// let test = new TriangleBezierCollisionAlgorithm()
// test.assignUserVariables()