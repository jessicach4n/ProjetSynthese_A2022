/* 
Nom du fichier  : ProcessorPolygon.js
Description     : Processeur qui encapsule les fonctionalités
                  reliés au Polygon Algorithm
Auteur          : Sebastian Perez
Autre étudiant  : Jessica Chan
*/
import { ProcessorSin } from './ProcessorSin';
import { ProcessorCos } from './ProcessorCos';
import { GenerativeAlgorithm } from './GenerativeAlgorithm';

export class ProcessorPolygon extends GenerativeAlgorithm{
    constructor() {
      super()
      this.members = [];
      this.NumberOfMembers = 0;
      this.paddingX = 25;
      this.paddingY = 25;
      this.chance = 0;
      this.colorChoices = [];
      this.canvasWidth = this.width - this.paddingX;
      this.canvasHeight = this.height - this.paddingY; 
      this.centralPoint = {};
      this.amplitudeRange = [];
      this.frequencyRange = [];
      this.phasedeRange = [];
      this.offsetRange = [];
      this.defaultAmplitude = 50;
      this.defaultFrequency = 0.4;
      this.defaultPhase = 90;
      this.defaultOffset = 50;
    }

    getMemebers(){
        return this.members;
    }

    setCentralPoint(point){
        this.centralPoint = point;
    }

    setChance(chance){
        this.chance = chance;
    }
   
    setNumberOfMembers(NumberOfMembers){
        this.NumberOfMembers = NumberOfMembers;
    }
    
    generatePoints(){
        for(let i = 0 ; i < this.NumberOfMembers ; i++){
            let amplitude = this.generateProcessorAmplitude(this.amplitudeRange[0],this.amplitudeRange[1]);
            let frequency = this.generateFrequency(this.frequencyRange[0], this.frequencyRange[1]);
            let phase = this.generatePhase(this.phasedeRange[0], this.phasedeRange[1]);
            let offset = this.genrerateOffset(this.offsetRange[0], this.offsetRange[1]);
                let member = {x: this.centralPoint.x,
                            y: this.centralPoint.y,
                            sin : new ProcessorSin(amplitude, frequency, offset, phase),
                            cos : new ProcessorCos(amplitude, frequency, offset, phase)}
                this.members.push(member);
            }
        } 

    generateProcessorAmplitude(min, max){
        if(this.diceRoll(this.chance)){
            return this.randomInRange(min, max);
        }
        return this.defaultAmplitude;
    }

    generateFrequency(min, max){
        if(this.diceRoll(this.chance)){
            return this.randomInRange(min, max);
        }
        return this.defaultFrequency;
    }

    genrerateOffset(min,max){
        if(this.diceRoll(this.chance)){
            return this.randomInRange(min, max);
        }
        return this.defaultOffset;
    }

    generatePhase(min,max){
        if(this.diceRoll(this.chance)){
            return this.randomInRange(min, max);
        }
        return this.defaultPhase;
    }

    diceRoll(chance){
        let diceRoll = Math.random()
        return chance > diceRoll;
    }

    randomInRange(min, max){
        return Math.random() * (max - min) + min;
    }

    movePoints(frameCount){
        let tmpX;
        let tmpY;
        for(let member of this.getMemebers()){
            tmpX = this.centralPoint.x + member.sin.generatePoint(frameCount);
            tmpY = this.centralPoint.y + member.cos.generatePoint(frameCount);
            
            tmpX = tmpX >= this.canvasWidth - this.paddingX ? this.canvasHeight : tmpX;
            tmpY = tmpY >= this.canvasHeight - this.paddingY ? this.canvasHeight : tmpY;

            tmpX = tmpX <= this.paddingX ? this.paddingX : tmpX;
            tmpY = tmpY <= this.paddingY ? this.paddingY : tmpY;
            
            member.x = tmpX;
            member.y = tmpY;

        }

    }

    setAmplitudeRange(range){
        if(!Array.isArray(range)){
            throw new Error("range must be of type array");
        }
        this.amplitudeRange = range;
    }

    setFrequencyRange(range){
        if(!Array.isArray(range)){
            throw new Error("range must be of type array");
        }
        this.frequencyRange = range;
    }

    setPhaseRange(range){
        if(!Array.isArray(range)){
            throw new Error("range must be of type array");
        }
        this.phasedeRange = range;
    }

    setOffsetRange(range){
        if(!Array.isArray(range)){
            throw new Error("range must be of type array");
        }
        this.offsetRange = range;
    }
    }

        

