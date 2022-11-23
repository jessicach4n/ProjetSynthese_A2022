import { GenerativeAlgorithm } from './GenerativeAlgorithm';
import Sketch from "react-p5";
import {ProcessorSin} from './ProcessorSin';
import {ProcessorCos} from './ProcessorCos';
import { SuperProcessor } from './SuperProcessor';

export default class TestAlgorithm extends GenerativeAlgorithm {
    constructor(props) {
    super(props)
    }
    render() {
        let width = window.innerWidth - 50
        let height = window.innerHeight - 50
        let pointCentral = {x : window.innerWidth/2, y : window.innerHeight/2}
        let processsorCos = new ProcessorCos(150, 1, pointCentral.x, 80);
        let processsorSin = new ProcessorSin(35, 2, pointCentral.y, 19);
        let framerate = 30
        let superProcessor = new SuperProcessor(processsorCos,processsorSin, processsorCos, processsorSin);
        
        const setup = (p5 ) => {
            
            var cnv = p5.createCanvas(width, height);
            cnv.style("z-index", "-1")
            cnv.position(0,0)
            cnv.id("canvas")
            p5.stroke("black")
            p5.frameRate(framerate)
        }
        
        const draw = (p5) => {
            p5.noStroke()
            p5.fill('pink')
            pointCentral.x = processsorCos.generatePoint(p5.frameCount);
            pointCentral.y = processsorSin.generatePoint(p5.frameCount);
            // console.log(pointCentral.x)
            p5.ellipse(pointCentral.x, pointCentral.y, 25)
            p5.ellipseMode(p5.CENTER);








            
        p5.background(0,40);
        }
    return (<Sketch setup={setup} draw={draw}/>);
    }
}