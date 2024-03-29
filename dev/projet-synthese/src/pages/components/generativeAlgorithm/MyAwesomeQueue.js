/* 
Nom du fichier  : MyAwesomeQueue.js
Description     : Classe qui met en place une file. 
Auteur          : Sebastian Perez
Autre étudiant  : Jessica Chan
*/

// REF : https://betterprogramming.pub/implementing-a-queue-in-javascript-59b332c7ff0d
// REF : https://bobbyhadz.com/blog/javascript-change-position-of-element-in-array#:~:text=To%20change%20the%20position%20of%20an%20element%20in%20an%20array%3A&text=Use%20the%20splice()%20method%20to%20insert%20the%20element%20at,elements%20at%20a%20specific%20index.
export class MyAwesomeQueue {
    constructor(size){
        this.data = [];
        this.nextElemPos = 0;
        this.size = size;
    }
    
    enqueue(element) {
        if(this.nextElemPos < this.size ) {
              this.data[this.nextElemPos] = element;
              this.nextElemPos = this.nextElemPos + 1;
        }
    }

    length() { 
        return this.nextElemPos
    }

    isEmpty() {
        return this.nextElemPos === 0
    }

    getFront() {
        if(this.isEmpty() === false) {
            return this.data[0]
        }
    }

    getLast() {
        if(this.isEmpty() === false) {
             return this.data[ this.nextElemPos - 1 ] 
        }
    }

    dequeue() {
        if(this.isEmpty() === false) {
             this.nextElemPos = this.nextElemPos-1
             return this.data.shift()
        }
    }

    print() { 
        for(let i =0;i < this.nextElemPos; i++) {
           console.log(this.data[i])
         }
    }

    clear() {
        this.data.length = 0
        this.nextElemPos = 0
    }

    circulatePoints(numberOfTimes=1){
        if(this.isEmpty() === false){
            for(let i =0;i < numberOfTimes; i++) {
                let tmp= this.getFront()
                this.dequeue()
                this.enqueue(tmp)
            }
        }
        else {
            throw new Error("Can't circulate points. Queue is empty.")
        }
    }
}