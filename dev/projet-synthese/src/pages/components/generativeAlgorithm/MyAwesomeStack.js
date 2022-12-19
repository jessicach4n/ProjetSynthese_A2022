/* 
Nom du fichier  : MyAwesomeStack.js
Description     : Classe qui met en place une Pile.
Auteur          : Sebastian Perez
Autre étudiant  : Jessica Chan
*/
// REF : https://www.programiz.com/javascript/examples/stack
export class MyAwesomeStack{
    constructor() {
        this.items = [];
    }

    add(element) {
        return this.items.push(element);
    }

    remove() {
        if(this.items.length > 0) {
            return this.items.pop();
        }
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty(){
       return this.items.length == 0;
    }

    size(){
        return this.items.length;
    }

    clear(){
        this.items = [];
    }
}