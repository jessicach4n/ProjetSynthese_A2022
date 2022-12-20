/* 
Nom du fichier  : VideoRecorder.js
Description     : Classe servant de conteneur pour la librairie WebMWritter permettant l'enregistrement des animations d'un canvas.
                  Cette classe s'occupe aussi d'envoyer au backend l'enregistrement de la vidéo sous forme de Blob po
Auteur          : Jessica Chan
Autre étudiant  : Sebastian Perez 
*/

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
            if (this.frameCounter >= this.vidLength) {
                this.save()
            }

        } catch (error) {
            console.log(error)
        }
    }

    handleShare(data) {
        let formData = new FormData();
        let creationDate = new Date().toLocaleDateString();
        let video = data;
        
        formData.append("creator", myConstants.USERNAME);
        formData.append("creationDate", creationDate);
        formData.append("city", myConstants.USER_LOCATION['city']);
        formData.append("country", myConstants.USER_LOCATION['country']);
        formData.append("video", video);
        formData.append("session_id", window.sessionStorage.getItem("session_id"));

        fetch(myConstants.HOST + '/algorithm.php', {
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
        });
    }
}  

