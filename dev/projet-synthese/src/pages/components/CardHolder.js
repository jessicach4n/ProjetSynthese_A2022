import React, { Component } from "react";
import '../../css/card.css'
import Card from "./Card";
import * as myConstants from '../constants.js'



class CardHolder extends Component {
    constructor(props) {
        super(props);

        let formData = new FormData();
        formData.append("action", myConstants.GET_IDS);

        fetch(myConstants.HOST + '/shares.php', {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(res => {
            this.ids = res.ids;
        })

        let items = ["hello", "bye", "cute", "awesome", "yo"];
        this.cards = [];
        items.forEach((item, index) => {
            // formData = new FormData()
            // formData.append("action", myConstants.GET_ANIMATION);
            // formData.append("id", id)

            // fetch(myConstants.HOST + '/shares.php', {
            //     method: 'POST',
            //     body: formData
            // })
            // .then(res => res.json())
            // .then(res => {
            //     console.log(res)
            // })
            this.cards.push(<Card key={index} username={item} />)
        })

    }

    render() {
        return (
            <div className="cards">
                {this.cards}
            </div>
        );
    }
}

export default CardHolder