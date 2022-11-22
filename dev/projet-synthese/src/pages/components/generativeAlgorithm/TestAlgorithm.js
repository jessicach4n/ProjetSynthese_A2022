import { GenerativeAlgorithm } from './GenerativeAlgorithm';
import Sketch from "react-p5";
import {ProcessorSin} from './ProcessorSin';
import {ProcessorCos} from './ProcessorCos';

export default class TestAlgorithm extends GenerativeAlgorithm {
    constructor(props) {
    super(props)
    }
    render() {
        let width = window.innerWidth - 50
        let height = window.innerHeight - 50
        let pointCentral = {x : window.innerWidth/2, y : window.innerHeight/2}
        let processsorCos = new ProcessorCos();
        let processsorSin = new ProcessorSin();
        let framerate = 30

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
            p5.ellipse(pointCentral.x, pointCentral.y, 25)
            p5.ellipseMode(p5.CENTER);








            
        p5.background(0,40);
        }
    return (<Sketch setup={setup} draw={draw}/>);
//     //ENCAPSULATION OF P5
//     // REF : https://github.com/processing/p5.js/wiki/Global-and-instance-mode
    }
}