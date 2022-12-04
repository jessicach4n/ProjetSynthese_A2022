import { Component } from "react";
import { VideoRecorder } from '../videoRecorder/VideoRecorder';
//? REF : https://codesandbox.io/s/k09k8knxz5
export class GenerativeAlgorithm extends Component{
    
    constructor(props) {
        super(props);
        if (this.constructor === GenerativeAlgorithm) {
            throw new Error('Class "GenerativeAlgorithm" cannot be instantiated')
          }
          this.color = "red"
          this.feelsLike = "fels like"
          this.temperature = "temperature"
          this.unixTime = "unixTime"
          this.groundAtmosphericPreassure = "groundAtmosphericPreassure"
          this.seaAtmosphericPreassure = "seaAtmosphericPreassure"
          this.cloudiness = "cloudiness"
          this.averageVisibility = "averageVisibility"
          this.humidity = "humidity" 

          this.quality = 0.1
          this.frameRate = 30
          
          this.width = 750
          this.height = 500 

          this.state = {isRecording: false};

    }

    componentDidMount() {
        document.addEventListener('startRecording', () => {
            this.videoRecorder.reset();
            this.setState({isRecording: true});
        });
    }

    

    setup(){
        this.videoRecorder = new VideoRecorder(this.quality, this.frameRate, this.canvas)
    }
    


    draw(){
        if (this.state.isRecording) {
            this.videoRecorder.record();
        }
    }
    
    callAPI(){
        throw new Error('Method "callAPI()" must be implemented in a sub class.')
    }
    
    assignUserVariables(){
        throw new Error('Method "assignUserVariables()" must be implemented in a sub class.')
    }

    render() {
        return false;
    }
}



