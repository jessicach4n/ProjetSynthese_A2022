import { GenerativeAlgorithm } from './GenerativeAlgorithm';
import { ProcessorBezier } from './ProcessorBezier';
import Sketch from "react-p5";
import * as myConstants from '../../constants';

export default class TriangleBezierCollisionAlgorithm extends GenerativeAlgorithm {
    constructor(props) {
    super(props)
    this.vidLenght = 100;
    this.quality = 0.1;
    this.frameRate = 30;
    this.canvas = null;
    this.marginOrder = [1,2,3,4];
    //*SIDES TOP:1 RIGHT:2 BOTTOM:3 LEFT:4 
    this.assignUserVariables()
    }

    assignUserVariables(){
        if(myConstants.IS_LOGGED_IN){
            this.cycleNumberOfMembers  = [1,2,3,4];
        }
        else {
            this.cycleNumberOfMembers = sessionStorage.getItem("cycleNumberOfMembers").split(',');
        }
    }

    render() {
        //* REF: https://www.w3schools.com/css/css3_variables_javascript.asp
        let rootColor = document.querySelector(':root');
        let rootstyle = getComputedStyle(rootColor);
        let mainColor = rootstyle.getPropertyValue('--main-accent-color')
        console.log(mainColor)

        let processorBezier = new ProcessorBezier();
        processorBezier.setPaddingX(12.5);
        processorBezier.setPaddingY(12.5);
        processorBezier.setColorChoices(['white', mainColor])
        processorBezier.setCycleNumberOfMembers(Array.from(this.cycleNumberOfMembers));
        processorBezier.updateBallNumer();
        processorBezier.setOrderMarginPoints(this.marginOrder);    
        
        let t = 0;
        let begin = true;
        let direction = processorBezier.queue.getFront();
        
        processorBezier.goToNextPoint();
        let newLastPoint = processorBezier.setNexMargintPoint(direction);
        let newfirstPoint = processorBezier.setNexMargintPoint(4);

        let p1 = {x :newfirstPoint.x, y : newfirstPoint.y};
        let p3 = {x : newLastPoint.x, y : newLastPoint.y};

            const setup = (p5) => {
                var cnv = p5.createCanvas(this.width, this.height);
                p5.stroke("black");
                this.canvas = cnv.canvas;
                super.setup();
            }
            
            const draw = (p5) => {
                p5.noStroke();
                for(let member of processorBezier.getMembers()){
                p5.fill(member.color);
                p5.ellipse(member.x, member.y , 25, 25);
                member.x = Math.pow((1-t),2) * p1.x + 2 * (1-t) * t * member.p2x + Math.pow(t,2) * p3.x;
                member.y = Math.pow((1-t),2) * p1.y + 2 * (1-t) * t * member.p2y + Math.pow(t,2) * p3.y;
            }
                if (t < 1 && begin){
                    t+=0.01;  
                }
                else{
                    let newLastPoint = processorBezier.goToNextPoint();
                    processorBezier.updateBallNumer(p3.x, p3.y);
                    p1 = p3;
                    p3 = {x : newLastPoint.x, y : newLastPoint.y};
                    t=0;
                }
            p5.background(0,0,0,130);  
            super.draw(); 
            }
            return (<Sketch setup={setup} draw={draw}/>);
        }
        //? REF : https://github.com/processing/p5.js/wiki/Global-and-instance-mode
    
}

//* REF : https://dev.to/ramonak/javascript-how-to-access-the-return-value-of-a-promise-object-1bck