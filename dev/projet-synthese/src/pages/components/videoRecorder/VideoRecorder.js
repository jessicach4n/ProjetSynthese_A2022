import WebMWriter from "webm-writer";
import * as myConstants from '../../constants.js'

export class VideoRecorder extends WebMWriter {
    constructor(quality, frameRate, canvas) {
        super({ quality: quality, frameRate: frameRate });
        this.vidLength = 100;
        this.canvas = canvas;
        this.frameCounter = 0;
    }

    reset() {
        this.frameCounter = 0;   
    }

    record() {
        if (this.frameCounter >= this.vidLength) {
            return;
        }
        try {
            this.addFrame(this.canvas);
            this.frameCounter++;
            console.log(this)
            if (this.frameCounter >= this.vidLength) {
                this.save()
            }

        } catch (error) {
            console.log("Abort download")
        }
    }

    handleShare(data) {
        let formData = new FormData();
        let creationDate = new Date();
        let video = data;
        
        formData.append("creator", myConstants.USERNAME);
        formData.append("creationDate", creationDate);
        formData.append("city", 'Montreal');
        formData.append("country", 'Canada');
        formData.append("video", video);
        formData.append("session_id", window.sessionStorage.getItem("session_id"));

        fetch(myConstants.HOST + '/animation.php', {
          method : 'POST',
          body: formData,
          cache: "no-store",
          processData: false,
          contentType: false
        })
        .then(res => res.json())
        .then(res => {
            document.dispatchEvent(new Event('recordingDone'));  
        })
    }

    save() {
        this.complete().then((webMBlob) => {
            if (webMBlob.size < 2000000) {
                this.handleShare(webMBlob);
            }
            // document
            //     .querySelector("video")
            //     .setAttribute("src", URL.createObjectURL(webMBlob));
            
            
        });
        // Save to local or session storage 
    }
}  

// First URL getAllAnimations.php -> returns Array of ids
// Second URL getAnimation.php?id=... -> returns video corresponding to id
