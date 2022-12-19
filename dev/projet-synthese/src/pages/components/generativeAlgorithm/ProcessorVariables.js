/* 
Nom du fichier  : ProcessorVariables.js
Description     : Processeur qui encapsule les fonctionalités
                  reliés aux manipulations des variables.
Auteur          : Sebastian Perez
Autre étudiant  : Jessica Chan
*/
import { ProcessorAPI } from './ProcessorAPI';
import * as myConstants from '../../constants'
export class ProcessorVariables{
   
    static pickVariable(options, emailNumber){
        if(!Array.isArray(options)){
            throw new Error('options argument of this function must be of type Array');
        }
        let process1 = emailNumber % (emailNumber.toString().length);
        let process2 = process1 % options.length;
        return (options[Math.abs(process2)]);
    }

    static createInfluencedList(chance,nb_elements,max_value){
        // REF : https://www.w3schools.com/js/js_random.asp
        let list = [];
        while (list.length<nb_elements){
            let diceRoll = Math.random();
            let valueToAdd = Math.floor(Math.random() * max_value + 1);
            if (diceRoll <= chance && !list.includes(valueToAdd)){
                list.push(valueToAdd);
            }
        }
        return list;
    }

    static choose(choices){
        if(!Array.isArray(choices)){
            throw new Error('choices argument must be of type Array');
        }
        let chance = this.initialization(choices)
        let diceRoll = Math.random();
        let indexOfChoice = Math.floor(Math.random() * choices.length);

        if(chance >= diceRoll){
            return choices[indexOfChoice];
        }

        for(let i = 0; i>choices.length; i++ ){
            indexOfChoice = Math.floor(Math.random() * choices.length);
        }     
        return choices[indexOfChoice];
    }

    static initialization(choices){
        if(!Array.isArray(choices)){
            throw new Error('choices argument must be of type Array');
        }
        let emailNumber = myConstants.IS_LOGGED_IN ? sessionStorage.getItem("emailNumber") : 1554652;
        let choice = this.pickVariable(choices,emailNumber);
        let chance = ProcessorAPI.normalizeAthmospericPressure(choice);
        return chance;
    }

    static createChoices(datasets){
        if(!Array.isArray(datasets)){
            throw new Error('datasets argument must be of type Array');
        }

        let choices = [];
        for(let dataset of datasets){
            choices.push(dataset.main.pressure);
        }
        return choices;
    }

    static createCycleNumberOfMembers(choices){
        if(!Array.isArray(choices)){
            throw new Error('choices argument must be of type Array');
        }

        let chance = this.initialization(choices);
        let finalList = this.createInfluencedList(chance,4,6);
        return finalList;
    }

    

}