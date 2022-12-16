import { GenerativeAlgorithm } from './GenerativeAlgorithm';
import { MyAwesomeQueue } from './MyAwesomeQueue';
import {ProcessorSin} from './ProcessorSin';
import {ProcessorCos} from './ProcessorCos';
import { Component } from "react";
import { ProcessorBezier } from './ProcessorBezier';
import Sketch from "react-p5";
import { VideoRecorder } from '../videoRecorder/VideoRecorder';
import * as myConstants from '../../constants'
import { ProrcessorVariables, VariablePicker } from './ProrcessorVariables';
import { ProcessorAPI } from './ProcessorAPI';

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
    this.isLoading = true;
    

    // this.callAPI()
    this.assignUserVariables()
    }
     assignUserVariables(){
        if(!myConstants.IS_LOGGED_IN){
            this.marginOrder = [1,2,3,4];
            this.cycleNumberOfMembers  = [1,2,3,4]
    //     }
    //     else { appeler le local storge de la variable processé par createCyclenumberOfMembers
    //         ProrcessorVariables.pickVariable(['1','2','3'], 156333);
        }
    }
    render() {
            let t = 0;
            let begin = true;
            //*SIDES TOP:1 RIGHT:2 BOTTOM:3 LEFT:4 
            // let marginOrder = [1,2,3,4];
            let processorBezier = new ProcessorBezier();
            processorBezier.setPaddingX(12.5);
            processorBezier.setPaddingY(12.5);
            console.log('this is cycle number of memebres ' + this.cycleNumberOfMembers)
            processorBezier.setCycleNumberOfMembers(this.cycleNumberOfMembers)
            processorBezier.updateBallNumer();
            processorBezier.setOrderMarginPoints(this.marginOrder);    

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
                console.log("setup");
            }
            
            const draw = (p5) => {
                // processorBezier.setCycleNumberOfMembers(this.cycleNumberOfMembers)
                // console.log(" i am loading" + this.isLoading)
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
        // let lat = 45.501690;
        let lat = 82.180809;
        // let lon = -73.567253;
        let lon = -33.233073;
        let limitDataSets = 9
        let apiKey = 'c1d5c35baa780a099ec8f564203dfc1e';
        //*Instead of lon & lat you can put &cityname ex: &london   
        let response = await fetch('https://api.openweathermap.org/data/2.5/forecast?lat='+lat+'&lon='+lon+'&units=metric&cnt='+limitDataSets+'&mode=JSON&appid='+apiKey+'');
        let data = await response.json();

        // GET https://newsapi.org/v2/everything?q=keyword&apiKey=408501c8bbd94a8ca7d9cff8085a125f

        
        // if (myConstants.IS_LOGGED_IN) {
        //     let formData = new FormData();
        //     formData.append("session_id", window.sessionStorage.getItem("session_id"));
        //     fetch(myConstants.HOST + '/animation.php', {
        //         method : 'POST',
        //         body : formData
        //       })
        //       .then(res => res.json())
        //       .then(res => {
        //         console.log(res.emailNumber);
        //         console.log(res.APIresponse);
        //       })
        // }
        if (data.lenght !==0){
            this.isLoading = false 
            // this.assignUserVariables()
        }
        let usefullData = [data.list[0],data.list[4],data.list[8]]
        return usefullData;
    }

    
}

//* REF : https://dev.to/ramonak/javascript-how-to-access-the-return-value-of-a-promise-object-1bck