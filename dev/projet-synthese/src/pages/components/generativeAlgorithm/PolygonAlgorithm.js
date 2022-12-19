import { GenerativeAlgorithm } from './GenerativeAlgorithm';
import Sketch from "react-p5";
import { ProcessorPolygon } from './ProcessorPolygon';
import * as myConstants from '../../constants';

export default class PolygonAlgorithm extends GenerativeAlgorithm {
    constructor(props) {
        super(props)
        this.chance = 0;
        this.assignUserVariables();
    }

    assignUserVariables(){
        if(!myConstants.IS_LOGGED_IN){
            this.chance = 0.5;
        }
        else {
            this.chance = sessionStorage.getItem('breathingNumberOfMembers');
        }
    }
    render() {

        let centralPoint = {x : this.width/2, y : this.height/2};
        let framerate = 30;
        let amplitudeRange = [25,250];
        let frequencyRange = [0.2,0.2];
        let phaseRange = [0,180];
        let rangeOffset = [-100,100];
        let numberOfMemebers = 10;
        let processorPolygon = new ProcessorPolygon();
        processorPolygon.setChance(this.chance);
        processorPolygon.setCentralPoint(centralPoint);
        processorPolygon.setAmplitudeRange(amplitudeRange);
        processorPolygon.setFrequencyRange(frequencyRange);
        processorPolygon.setOffsetRange(rangeOffset);
        processorPolygon.setPhaseRange(phaseRange);
        processorPolygon.setNumberOfMembers(numberOfMemebers);
        processorPolygon.generatePoints();
        
        const setup = (p5 ) => {
            var cnv = p5.createCanvas(this.width, this.height);
            p5.stroke("black");
            p5.frameRate(framerate);
        }
        
        const draw = (p5) => {
            p5.stroke(255);
            p5.strokeWeight(5);

            let members = processorPolygon.getMemebers();
            for(let i = 0 ; i< members.length ; i++ ){

                if(i == members.length - 1){
                    p5.line(members[i].x, members[i].y, members[0].x, members[0].y);
                }

                else{
                    p5.line(members[i].x, members[i].y, members[i+1].x, members[i+1].y);
                }

                p5.line(members[i].x, members[i].y, centralPoint.x, centralPoint.y);

            }
            processorPolygon.movePoints(p5.frameCount);

            p5.ellipseMode(p5.CENTER);
        p5.background(0,0,0,40);
        }
    return (<Sketch setup={setup} draw={draw}/>);
    }
}