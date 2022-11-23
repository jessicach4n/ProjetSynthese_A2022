import WebMWriter from "webm-writer"; 

// DRAFT DO NOT USE YET !!!!!!
export class VideoRecorder extends WebMWriter {
    constructor(quality, frameRate, p5FrameCount,canvas, vidLenght) {
        super(quality, frameRate);
        this.vidLenght = vidLenght
        this.canvas = canvas
        this.recordingComplete = false;
        this.count = 0;
    }
    
    record() {
        try {
            if (p5FrameCount < this.vidLenght) {
                videoWriter.addFrame(this.canvas);
                console.log(videoWriter)
            }
            else {
                this.recordingComplete = true;
            }
        } catch (error) {
            console.log("Abort download")
        }
        
        if (this.recordingComplete) {
            if (this.count < 1) {
                videoWriter.complete().then((webMBlob) => {
                    document
                      .querySelector("video")
                      .setAttribute("src", URL.createObjectURL(webMBlob));
                      console.log(webMBlob);
                  });
                  
                  this.recordingComplete = false;
                  this.count++;
            }
        }
    }
    
}