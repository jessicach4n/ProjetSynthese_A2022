import React, { Component } from "react";
import '../../css/card.css'
import Card from "./Card";
import * as myConstants from '../constants.js'

class CardHolder extends Component {
    constructor(props) {
        super(props);
        this.state = {cards : []}
    }

    componentDidMount() {
        let formData = new FormData();
        formData.append("action", myConstants.GET_IDS);
        formData.append("session_id", window.sessionStorage.getItem("session_id"));
        fetch(myConstants.HOST + '/shares.php', {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(res => {
            this.ids = res.response;
            let cards = [];
            this.ids.forEach((id) => {   
                // cards.push(<Card key={id} username={id} video={id}/>)
                let formData = new FormData();
                formData.append("action", myConstants.GET_ANIMATION_INFO);
                formData.append("id", id);
                formData.append("session_id", window.sessionStorage.getItem("session_id"));
                fetch(myConstants.HOST + '/shares.php', {
                    method: 'POST',
                    body: formData
                })
                .then(res => res.json())
                .then(res => {
                    let response = res.response[0];
                    let video = response['id'];
                    let username = response['nom_utilisateur'];
                    let city = response['ville'];
                    let country = response['pays'];
                    let timestamp = response['date_creation'];
                    cards.push(<Card key={video} username={username} city={city} country={country} timestamp={timestamp} video={video}/>)
                    this.setState({cards:cards});
                })
            })
        })
    }   

    render() {
        return (
            <div className="cards">
                {this.state.cards}
            </div>
        );
    }
}

export default CardHolder