export class ProcessorCos{
    constructor() {
      this.amplitude = 1;
      this.frequency = 1;
      this.offset = 0;
      this.phase = 0;
      this.frameRate= 30
    }

    generatePoint(frameCount){
      let value = this.amplitude * Math.cos(frameCount*this.frequency / this.frameRate * ((2 * Math.PI) + this.phase/180 * Math.PI) + this.offset);
      return value  
    } 
  }