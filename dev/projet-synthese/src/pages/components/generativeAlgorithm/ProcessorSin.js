export class ProcessorSin{
    constructor(amplitude = 1, frequency = 1, offset = 0, phase = 0 ) {
      this.amplitude = amplitude;
      this.frequency = frequency;
      this.offset = offset;
      this.phase = phase;
      this.frameRate= 30
      // console.log(this.amplitude + this.frequency +this.offset + this.phase )
    }

    generatePoint(frameCount){
      let value = this.amplitude * Math.sin(frameCount*this.frequency / this.frameRate * ((2 * Math.PI) + this.phase/180 * Math.PI))
      + this.offset;
      return value  
    } 
  }