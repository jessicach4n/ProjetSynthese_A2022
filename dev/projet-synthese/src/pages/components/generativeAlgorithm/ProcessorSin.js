/* 
Nom du fichier  : ProcessorSin.js
Description     : Processeur qui encapsule les fonctionalités
                  reliés au Sin mathématique afin de faire
                  tourner un point au tour d'un autre.
Auteur          : Sebastian Perez
Autre étudiant  : Jessica Chan
*/
export class ProcessorSin{
    constructor(amplitude = 1, frequency = 1, offset = 0, phase = 0 ) {
      this.amplitude = amplitude;
      this.frequency = frequency;
      this.offset = offset;
      this.phase = phase;
      this.frameRate= 30
    }

    generatePoint(frameCount){
      let value = this.amplitude * Math.sin(frameCount*this.frequency / this.frameRate * ((2 * Math.PI) + this.phase/180 * Math.PI))
      + this.offset;
      return value  
    } 

    setAmplitude(amplitude){
      this.amplitude = amplitude;
    }

    setFrequency(frequency){
      this.frequency = frequency;
    }

    setOffset(offset){
      this.offset = offset;
    }

    setPhase(phase){
      this.phase = phase
    }
  }