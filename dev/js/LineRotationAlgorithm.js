// import ('./GenerativeAlgorithm.js')
// import { GenerativeAlgorithm } from './GenerativeAlgorithm.js';
let r = 0
let g = 0
let b = 0
let filColor = "teal"
let colorp = "red"
let width = window.innerWidth - 250
let height = window.innerHeight - 250
// Math.floor(Math.random() * width);
let p1 = {x : Math.floor(Math.random() * width), y : Math.floor(Math.random() * width)}
let p2 = {x : Math.floor(Math.random() * width), y : Math.floor(Math.random() * width)}
let p3 = {x : Math.floor(Math.random() * width), y : Math.floor(Math.random() * width)}
let t = 0
let begin = true
let pointInital  = {x :150, y : 120}

function setup() {
    // createCanvas(window.innerWidth-10, window.innerHeight-70, WEBGL);
// createCanvas(window.innerWidth-10, window.innerHeight-70);
var cnv = createCanvas(window.innerWidth, window.innerHeight );
cnv.style("z-index", "-1")
cnv.position(0,0)
//noStroke();
stroke("black")
// let  alg = new LineRotationAlgorithm()
//   alg.assignUserVariables()
  console.log("INTO THE GOOD ALOGO")
}

function draw(){
    noStroke()

fill(filColor)
ellipse(pointInital.x, pointInital.y , 25, 25)

fill('red')
ellipse(p1.x, p1.y , 25, 25)

fill('blue')
ellipse(p2.x, p2.y , 25, 25) 

fill('yellow')
ellipse(p3.x, p3.y , 25, 25) 

pointInital.x = Math.pow((1-t),2) * p1.x + 2 * (1-t) * t * p2.x + Math.pow(t,2) * p3.x
pointInital.y = Math.pow((1-t),2) * p1.y + 2 * (1-t) * t * p2.y + Math.pow(t,2) * p3.y


    if (t < 1 && begin){
        t+=0.01
    }

    else{
        t-= 0.01
        begin = false

        if (t < -0.01 ){
            begin = true 
            t+=0.01
        }
    }
background(r,g,b,40);
}

   class LineRotationAlgorithm extends GenerativeAlgorithm {
    constructor() {
      super()
      this.feelsLike
      this.temperature
      this.unixTime      
      this.groundAtmosphericPreassure      
      this.seaAtmosphericPreassure      
      this.cloudiness
      this.averageVisibility      
      this.humidity    
    }
     
    
    
    
    
    callAPI(){
        console.log("call api")
    }
    //variables work 
    //LineRotationAlgorithm
    //BreathingCircleAlgorithm
    //TriangleBesierCollisionAlgorithm
    assignUserVariables(){
        console.log("assig variables")
        console.log( 
            "fells like  "+ this.feelsLike +  "\n" +
            'temperature         ' + this.temperature+ "\n" +
            'unixtime         ' + this.unixTime + "\n" +
            'groundAtmosphericPreassure         ' + this.groundAtmosphericPreassure+ "\n" +
            'seaAtmosphericPreassure         ' + this.seaAtmosphericPreassure+ "\n" +
            'cloudiness         ' + this.cloudiness+ "\n" +
            'ave           ' + this.averageVisibility+ "\n" +
            'humidity          ' + this.humidity
            
        ) 
    }
  }
  
  //testing purposes. 
  

//   REF : https://sandromiguel.com/abstract-class-and-method-in-javascript/