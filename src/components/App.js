import React, {Component} from "react"
import { Button } from "react-bootstrap";
import Gift from "./gift"

import { max_number } from "../helper";

class App extends Component {
    constructor() {
        super();

        this.state = {
            gifts:[]
        }
    }

    addGift = () => {
        const gifts = this.state.gifts;
        const ids = this.state.gifts.map(gift => gift.id);

        const maxId = max_number(ids);

        gifts.push({ id: maxId + 1 });

        this.setState({gifts})
    };

    removeGift = id => {
        const gifts = this.state.gifts.filter(gift => gift.id !== id);

        this.setState({gifts})
    };

    render() {

        return (<div>
            <h2>Gift Giver</h2>
            <div className="gift-list">
                {
                    this.state.gifts.map( gift => {
                        return <Gift key={gift.id} gift={gift} removeGift={this.removeGift}/>
                    })
                }
            </div>
            <Button onClick={this.addGift} className="btn-add">Add Gift</Button>
        </div>)
    }
}

export default App;
