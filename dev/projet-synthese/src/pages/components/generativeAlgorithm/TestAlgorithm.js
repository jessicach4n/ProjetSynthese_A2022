import { GenerativeAlgorithm } from './GenerativeAlgorithm';
import Sketch from "react-p5";
import {ProcessorSin} from './ProcessorSin';
import {ProcessorCos} from './ProcessorCos';
import { ProcessorPolygon } from './ProcessorPolygon';


export default class TestAlgorithm extends GenerativeAlgorithm {
    constructor(props) {
    super(props)
    }
    render() {

        let centralPoint = {x : this.width/2, y : this.height/2}
        let framerate = 30;
        let chance = sessionStorage.getItem('breathingNumberOfMembers')
        let amplitudeRange = [25,200]
        let frequencyRange = [0.2,1]
        let phaseRange = [0,180];
        let rangeOffset = [-100,100];
        let numberOfMemebers = 5
        let processorPolygon = new ProcessorPolygon();
        processorPolygon.setChance(chance);
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
            p5.noStroke()
            p5.fill('pink')
            // console.log("memebrs " + processorPolygon.getMemebers())
            
            for(let member of processorPolygon.getMemebers()){
                
                p5.ellipse(member.x, member.y,25)
            }

            // console.log('framecount : ' + p5.frameCount)
            processorPolygon.movePoints(p5.frameCount)
            processorPolygon.linkPoints();                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      

            // pointCentral.x = processsorCos.generatePoint(p5.frameCount);
            // pointCentral.y = processsorSin.generatePoint(p5.frameCount);
            // console.log(pointCentral.x)
            // p5.ellipse(pointCentral.x, pointCentral.y, 25)
            p5.ellipseMode(p5.CENTER);








            
        p5.background(255,40);
        }
    return (<Sketch setup={setup} draw={draw}/>);
    }
}