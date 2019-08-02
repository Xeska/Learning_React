import React, { Component } from "react"
import IngredientHandler from "./IngredientHandler"
import "./ChoiceHandler.css"

class ChoiceHandler extends Component {
    constructor() {
        super()
        this.state = {
            price: 4,
            count: {
                salad: 0,
                bacon: 0,
                cheese: 0,
                meat: 0
            },
            unitPrice: {
                salad: 0.30,
                bacon: 0.60,
                cheese: 0.45,
                meat: 0.85
            }
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event) {
        const {name, value} = event.target

        if (value === "minus")
        {
            if (this.state.count[name] - 1 >= 0) {
                this.setState((prevState) => ({
                        count: {
                            ...prevState.count,
                            [name]: prevState.count[name] - 1
                        }
                    })
                )
                this.setState((prevState) => ({
                    price: prevState.price - prevState.unitPrice[name]
                })
            )
            } else {
                this.setState((prevState) => ({
                        count: {
                            ...prevState.count,
                            [name]: 0
                        }
                    })
                )
            }
        } else {
            this.setState((prevState) => ({
                    count: {
                        ...prevState.count,
                        [name]: prevState.count[name] + 1
                    }
                })
            )
            this.setState((prevState) => ({
                    price: prevState.price + prevState.unitPrice[name]
                })
            )
        }
    }

    render() {
        return (
            <div>
                <div className="current-price">
                    <h1>Current Price:</h1>
                    <p>{this.state.price.toLocaleString("fr-FR", { style: "currency", currency: "EUR"})}</p>
                    <br />
                </div>
                <div className="action-box">
                    <IngredientHandler 
                    name="salad" 
                    data={this.state} 
                    handleClick={this.handleClick}
                />
                    <IngredientHandler 
                    name="bacon" 
                    data={this.state} 
                    handleClick={this.handleClick}
                />
                    <IngredientHandler 
                    name="cheese" 
                    data={this.state} 
                    handleClick={this.handleClick}
                />
                    <IngredientHandler 
                    name="meat" 
                    data={this.state} 
                    handleClick={this.handleClick}
                />
                </div>
            </div>
        )
    }
}

export default ChoiceHandler