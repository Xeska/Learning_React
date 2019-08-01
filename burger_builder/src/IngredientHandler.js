import React, { Component } from "react"

class IngredientHandler extends Component {
    constructor(props) {
        super(props)
        this.state = {
            number: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(action) {
        action === "minus" ?
        this.setState(
            this.state.number - 1 < 0 ? {number: 0} : {number: this.state.number - 1}
            )
        :
        this.setState(
            {number: this.state.number + 1}
            )
    }

    render() {
        return (
            <div>
                <p>{this.props.name.toUpperCase()}: {this.state.number}</p>
                <button className="button-plus" onClick={() => this.handleClick("plus")}>+</button>
                <button className="button-minus" onClick={() => this.handleClick("minus")}>-</button>
            </div>
        )
    }
}

export default IngredientHandler