import { ProcessorAPI } from './ProcessorAPI';
export class ProrcessorVariables{
   
    static pickVariable(options, emailNumber){
        if(!Array.isArray(options)){
            throw new Error('first argument of this function must be of type Array');
        }
        let process1 = emailNumber % (emailNumber.toString().length);
        let process2 = process1 % options.length;
        return (options[Math.abs(process2)])  
    }

    static createInfluencedList(chance,nb_elements,max_value){
        //? REF:https://www.w3schools.com/js/js_random.asp
        let list = []
        while (list.length<nb_elements){
            let diceRoll = Math.random();
            let valueToAdd = Math.floor(Math.random() * max_value + 1);
            if (diceRoll <= chance && !list.includes(valueToAdd)){
                list.push(valueToAdd);
            }
        }
        return list;
    }

    static createCyclenumberOfMembers(datasets){
        let emailNumber;
        let choices = []
        for(let dataset of datasets){
            choices.push(dataset.main.pressure);
        }
            
        let choice = ProrcessorVariables.pickVariable(choices,emailNumber);
        let chance = ProcessorAPI.normalizeAthmospericPressure(choice);
        let finalList = ProrcessorVariables.createInfluencedList(chance,4,7);
        return [4,3,2,1];
        }

    

}