import React, { Component } from "react"
import "./CatGenerator.css"

class CatGenerator extends Component {
    constructor(props) {
        super(props)
        this.state = {
            img: "https://cdn2.thecatapi.com/images/MTg5ODIxNg.jpg",
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event) {

        fetch("https://api.thecatapi.com/v1/images/search")
        .then(response => response.json())
        .then(response => {
            this.setState({ img: response[0].url })
        })

        if (event.target.id === 'love') {
            this.props.updateParentFav(this.state.img)
        }
    }

    render() {
        console.log(this.props.fav)

        return (
            <div className="generator-content">
                <div className="generator-btn">
                    <button id='love' className="love-btn" onClick={this.handleClick}>Love it !</button>
                    <button id='meh' className="meh-btn" onClick={this.handleClick}>Meh :/</button>
                </div>
                <img src={this.state.img} alt='neko-img'/>
            </div>
        )
    }
}

export default CatGenerator