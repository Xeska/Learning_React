import React, { Component } from "react"
import Modal from "./Modal"
import "./SubmitOrder.css"

class SubmitOrder extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
        this.showModal = this.showModal.bind(this)
        this.hideModal = this.hideModal.bind(this)
    }

    showModal() {
        this.setState({show: true})
    }

    hideModal() {
        this.setState({show: false})
    }

    render() {
        const check = []
        const {count, price, unitPrice} = this.props.dataToModal

        for (let i = 0; i < Object.keys(count).length; i++) {
            if (count[Object.keys(count)[i]] !== 0) {
                let mult = count[Object.keys(count)[i]] * unitPrice[Object.keys(unitPrice)[i]]
                let priceIndex = unitPrice.indexOf(Object.keys(count)[i])
                check.push(<div key={i}>{count[Object.keys(count)[i]]} x {unitPrice[Object.keys(unitPrice)[priceIndex]]} = {mult.toLocaleString("fr-FR", { style: "currency", currency: "EUR"})}</div>)
            }
        }

        console.log(check);
        return (
            <div className="submit-button">
                <Modal 
                    show={this.state.show} 
                    handleClose={this.hideModal} 
                    children={this.props.dataToModal}
                >
                    <h1>Resumé de votre commande:</h1>
                    <p>1 x Burger: {unitPrice.burger.toLocaleString("fr-FR", { style: "currency", currency: "EUR"})}</p>
                    {check}
                    <p>Total: {price}</p>
                </Modal>
                <button onClick={this.showModal}>Confirm your order !</button>
            </div>
        )
    }
}

export default SubmitOrder