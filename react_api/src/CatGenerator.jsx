import React, { Component } from "react"
import "./CatGenerator.css"

class CatGenerator extends Component {
    constructor(props) {
        super(props)

        fetch("https://api.thecatapi.com/v1/images/search")
        .then(response => response.json())
        .then(response => {
            this.setState({ img: response[0].url })
        })

        this.state = {
            img: '',
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event) {
        const { img } = this.state
        const { id } = event.target
        const { fav } = this.props
        
        fetch("https://api.thecatapi.com/v1/images/search")
        .then(response => response.json())
        .then(response => {
            this.setState({ img: response[0].url })
        })

        console.log(fav)
        console.log(fav.indexOf(img))
        console.log('img:', img)

        if (id === 'love' && fav.indexOf(img) === -1) {
            this.props.updateParentFav(img)
        }
    }

    render() {
        return (
            <div className="generator-content">
                <div className="generator-btn">
                    <button id='love' className="love-btn" onClick={this.handleClick}>Love it !</button>
                    <button id='meh' className="meh-btn" onClick={this.handleClick}>Meh :/</button>
                </div>
                <img src={this.state.img} alt=''/>
            </div>
        )
    }
}

export default CatGenerator