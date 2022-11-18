import WebMWriter from "webm-writer"; 


// DRAFT DO NOT USE YET !!!!!!
export class VideoRecorder extends (WebMWriter) {
    constructor() {
        this.downloadComplete = false;
        this.count = 0;
        var videoWriter = new WebMWriter({
            quality: 0.95,
            frameRate: 30
          });
    }
    
    record() {
        try {
            if (p5.frameCount < this.vidLenght) {
                videoWriter.addFrame(this.canvas);
                console.log(videoWriter)
                // this.capturer.capture(this.canvas);
            }
            else {
                this.downloadComplete = true;
            }
        } catch (error) {
            console.log("Abort download")
        }
        
        if (this.downloadComplete) {
            if (this.count < 1) {
                videoWriter.complete().then((webMBlob) => {
                    document
                      .querySelector("video")
                      .setAttribute("src", URL.createObjectURL(webMBlob));
                      console.log(webMBlob);
                  });
                  
                  this.downloadComplete = false;
                  this.count++;
            }
        }
    }
    
}