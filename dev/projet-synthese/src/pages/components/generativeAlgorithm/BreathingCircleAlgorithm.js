import Sketch from "react-p5";
import { GenerativeAlgorithm } from './GenerativeAlgorithm';
import { ProcessorSin } from "./ProcessorSin";
import { ProcessorCos } from "./ProcessorCos";
import * as myConstants from '../../constants';

export default class BreathingCircleAlgorithm extends GenerativeAlgorithm {
    constructor(props) {
    super(props);

    this.frameRate = 30;
    this.assignUserVariables();
    }

    assignUserVariables(){
        if(!myConstants.IS_LOGGED_IN){
            this.numberOfMemebers = 5;
            this.frequency = 0.5;
        }
        else {
            let decimalNumber = parseFloat(sessionStorage.getItem("breathingNumberOfMembers")) * 10; 
            this.numberOfMemebers = Math.round(decimalNumber);
            this.frequency = 0.5;
        }
    }

    render() {
            let amplitude = 100;
            let offset = 0;
            let phase = 20;
            let pointCentral = {x : this.width/2, y : this.height/2};
            let offsetOuterPoint = 75;
            let processorSin;
            let processorCos;
            let offsetPositionX;
            let offsetPositionY;
            let innerPoint;
            let outerPoint;

            const setup = (p5) => {
                var cnv = p5.createCanvas(this.width, this.height);
                this.canvas = cnv.canvas;
                p5.frameRate(this.frameRate);
                super.setup();
            }
            
            const draw = (p5) => {
                p5.stroke(255);
                p5.strokeWeight(5);
 
                for(let i = 0 ;  i < this.numberOfMemebers ; i += 1){

                    processorSin = new ProcessorSin(amplitude, this.frequency, offset, phase + i * 10);
                    processorCos = new ProcessorCos(amplitude, this.frequency, offset, phase + i * 10);
                    
                    offsetPositionX = processorCos.generatePoint(p5.frameCount);
                    offsetPositionY = processorSin.generatePoint(p5.frameCount);

                    innerPoint = {x: (pointCentral.x + offsetOuterPoint) + offsetPositionX,
                                    y: (pointCentral.y + offsetOuterPoint)+ offsetPositionY, size: 25};

                    outerPoint = {x: (pointCentral.x - offsetOuterPoint) + offsetPositionX, 
                                    y: (pointCentral.y - offsetOuterPoint) + offsetPositionY,size: 25};
                    
                    p5.line(innerPoint.x, innerPoint.y, outerPoint.x, outerPoint.y)

                }
                
            p5.background(0,0,0,40);
            super.draw();
            }
        return (<Sketch setup={setup} draw={draw}/>);
        //ENCAPSULATION OF P5
        // REF : https://github.com/processing/p5.js/wiki/Global-and-instance-mode
    }
    

    
}
