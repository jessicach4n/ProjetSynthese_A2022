import { MyAwesomeQueue } from './MyAwesomeQueue';
import { MyAwesomeStack } from './MyAwesomeStack';
import { GenerativeAlgorithm } from './GenerativeAlgorithm';
export class ProcessorBezier  extends GenerativeAlgorithm{
  constructor() {
    super()
    this.members = [];
    this.queue = new MyAwesomeQueue(4)
    this.stack = new MyAwesomeStack()
    }

    addMembers(memberNumber){
      for(let i = 0 ; i < memberNumber ; i++){
        let ball = {x : 0, y: 0, p2x : 0, p2y : 0} 
        this.members.push(ball);
      }
      
    }
    getMembers(){
      return this.members;
    }
    setMiddlePoint(){
      for(let member of this.members){
        member.p2x = Math.floor(Math.random() * this.width)
        member.p2y = Math.floor(Math.random() * this.height)
      }
    }

    setOrderMarginPoints(tab){
      for (let chose of tab){
        this.queue.enqueue(chose)
      }
    }

    deleteOrderMargin(tab){
      for (let element in tab){
        this.queue.dequeue(element)
      }
    }

    goToNextPoint(){
      let direction = this.queue.getFront()
      let point = this.setNexMargintPoint(direction)
      this.queue.circulatePoints()
      return point
    }

    setNexMargintPoint(side){
      let point ={};
    //*SIDES TOP:1 RIGHT:2 BOTTOM:3 LEFT:4       
    if (side == 1){
        point = {x: Math.floor(Math.random() * this.width), y: 0};
      }
      
      if (side == 2){
        point = {x: this.width, y: Math.floor(Math.random() * this.height)};
      }
      
      if (side == 3){

        point = {x: Math.floor(Math.random() * this.width) , y: this.height};
      }
      
      if (side == 4){
        point = {x: 0  , y: Math.floor(Math.random() * this.height)};
      }
      return point
    }


  }