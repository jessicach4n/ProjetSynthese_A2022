export class ProcessorSin{
    constructor() {
      this.amplitude = 1;
      this.frequency = 1;
      this.offset = 0;
      this.phase = 0;
    }

    generatePoint(frameCount){
      let value = this.amplitude *Math.sin(frameCount/this.frequency * ((2 * Math.PI) + this.phase/180 * Math.PI) + this.offset);
      return value  
    } 
  }