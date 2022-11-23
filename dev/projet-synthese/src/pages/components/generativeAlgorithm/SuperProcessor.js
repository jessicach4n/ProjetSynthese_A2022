import {ProcessorSin} from './ProcessorSin';
import {ProcessorCos} from './ProcessorCos';
export class SuperProcessor{
    constructor(processorAmp, Processorfreq, ProcessorOffset , ProcessorPhase) {
      this.amplitude = processorAmp;
      this.frequency = Processorfreq;
      this.offset = ProcessorOffset;
      this.phase = ProcessorPhase;
      this.frameRate= 30
    }

    generatePoint(frameCount){
        let myAmplitude = this.amplitude.generatePoint(frameCount);
        let myFrequency = this.frequency.generatePoint(frameCount);
        let myOffset = this.offset.generatePoint(frameCount);
        let myPhase = this.phase.generatePoint(frameCount);

        let value = myAmplitude * Math.cos(frameCount * myFrequency / this.frameRate * ((2 * Math.PI) + myPhase/180 * Math.PI))
        + myOffset

        console.log(value)
        return value  
    } 
  }