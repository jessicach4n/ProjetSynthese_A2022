export class VariablePicker{
   
    static pickVariable(tab){
        if(!Array.isArray(tab)){
            throw new Error('argument of this function must be of type Array');
        }
        console.log(('STATIC WORKS '))
    }

}