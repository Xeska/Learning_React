import React, { Component } from "react"
import IngredientHandler from "./IngredientHandler"
import "./ChoiceHandler.css"

class ChoiceHandler extends Component {
    constructor() {
        super()
        this.state = {
            price: 0,
            count: {
                salad: 0,
                bacon: 0,
                cheese: 0,
                meat: 0
            }
        }
    }

    render() {
        return (
            <div>
                <div className="current-price">
                    <h1>Current Price:</h1>
                    <p>9.99</p>
                </div>
                <div className="actions">
                    <IngredientHandler name="salad" count={this.state.count["salad"]}/>
                    <IngredientHandler name="bacon" count={this.state.count["bacon"]}/>
                    <IngredientHandler name="cheese" count={this.state.count["cheese"]}/>
                    <IngredientHandler name="meat" count={this.state.count["meat"]}/>
                </div>
            </div>
        )
    }
}

export default ChoiceHandler