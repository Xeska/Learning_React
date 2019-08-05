import React, { Component } from "react"
import IngredientHandler from "./IngredientHandler"
import BurgerLayers from "./BurgerLayers"
import SubmitOrder from "./SubmitOrder"
import "./ChoiceHandler.css"

class ChoiceHandler extends Component {
    constructor(props) {
        super(props)
        this.state = {
            price: 4,
            count: {
                salad: 0,
                bacon: 0,
                cheese: 0,
                meat: 0
            },
            unitPrice: {
                burger: 4.00,
                salad: 0.30,
                bacon: 0.60,
                cheese: 0.45,
                meat: 0.85
            },
            layers: []
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event) {
        const {name, value} = event.target
        const copyLayers = [...this.state.layers]

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
            copyLayers.splice(copyLayers.indexOf(name), 1)
            this.setState({layers: copyLayers})
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
            this.setState((prevState) => ({
                    layers: [name, ...prevState.layers]
                })
            )
        }
    }

    render() {
        return (
            <div>
                <BurgerLayers layers={this.state.layers}/>
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
                <SubmitOrder dataToModal={this.state}/>
            </div>
        )
    }
}

export default ChoiceHandler