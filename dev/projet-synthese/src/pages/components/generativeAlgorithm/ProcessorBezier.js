import { MyAwesomeQueue } from './MyAwesomeQueue';
import { MyAwesomeStack } from './MyAwesomeStack';
import { GenerativeAlgorithm } from './GenerativeAlgorithm';
export class ProcessorBezier  extends GenerativeAlgorithm{
  constructor() {
    super()
    this.members = [];
    this.queue = new MyAwesomeQueue(4)
    this.stack = new MyAwesomeStack()
    this.cycleNumberOfMembers = [];
    this.paddingX = 0
    this.paddingY = 0

    this.canvasWidth = this.width - this.paddingX;
    this.canvasHeight = this.height - this.paddingY; 
    }

    setPaddingX(value){
      this.paddingX = value
      this.canvasWidth = this.width - this.paddingX;
    }

    setPaddingY(value){
      this.paddingY = value
      this.canvasHeight = this.height - this.paddingY; 
    }
    setCycleNumberOfMembers(tab){
      if(Array.isArray(tab)){
        tab.reverse()
        for(let i = 0 ; i < tab.length ; i++){
          this.cycleNumberOfMembers.push(tab[i]);
          this.stack.add(tab[i]);
        }
      }
      else 
       throw new Error('setCycleNumberOfMembers argument must be of type Array');
    }

    addMembers(memberNumber){
      for(let i = 0 ; i < memberNumber ; i++){
        let ball = {x : 0, y: 0, p2x : 150, p2y : 150} 
        this.members.push(ball);
      }
      this.setMiddlePoint()
    }

    updateBallNumer(){
      let membersToAdd = this.stack.peek();
      this.stack.remove()

      if(this.stack.isEmpty()){
        this.cycleNumberOfMembers.reverse()
        for(let i = 1 ; i< this.cycleNumberOfMembers.length ; i++)
        this.stack.add(this.cycleNumberOfMembers[i])
      }
      this.members = []
      this.addMembers(membersToAdd)
    }

    getMembers(){
      return this.members;
    }

    setMiddlePoint(){
      for(let member of this.members){
        member.p2x = Math.floor(Math.random() *  this.canvasWidth);
        member.p2y = Math.floor(Math.random() *  this.canvasHeight);
      }
    }

    setOrderMarginPoints(tab){
      for (let element of tab){
        this.queue.enqueue(element);
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
        point = {x: Math.floor(Math.random() *  this.canvasWidth), y: this.paddingY};
      }
      
      if (side == 2){
        point = {x:  this.canvasWidth, y: Math.floor(Math.random() *  this.canvasHeight)};
      }
      
      if (side == 3){
        point = {x: Math.floor(Math.random() *  this.canvasWidth) , y:  this.canvasHeight};
      }
      
      if (side == 4){
        point = {x: this.paddingX  , y: Math.floor(Math.random() *  this.canvasHeight)};
      }
      return point
    }
  }