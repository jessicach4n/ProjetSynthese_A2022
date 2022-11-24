import WebMWriter from "webm-writer";

export class VideoRecorder extends WebMWriter {
    constructor(quality, frameRate, canvas, vidLength) {
        super({ quality: quality, frameRate: frameRate });
        this.vidLength = vidLength
        this.canvas = canvas
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

    save() {
        this.complete().then((webMBlob) => {
            document
                .querySelector("video")
                .setAttribute("src", URL.createObjectURL(webMBlob));
            console.log(webMBlob);
        });
        // Save to local or session storage 
    }
}  
