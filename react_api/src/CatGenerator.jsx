import React, { Component } from "react"
import "./CatGenerator.css"

class CatGenerator extends Component {
    constructor() {
        super()
        this.state = {
            img: "https://cdn2.thecatapi.com/images/9ab.jpg"
        }
    }

    componentDidMount() {
        fetch("https://api.thecatapi.com/v1/images/search")
        .then(response => response.json())
        .then(response => {
            console.log(response)
            this.setState({ allImages: response })
        })
    }

    render() {
        return (
            <div className="generator-content">
                <div className="generator-btn">
                    <button className="love-btn">Love it !</button>
                    <button className="meh-btn">Meh :/</button>
                </div>
                <img src={this.state.img} alt='neko-img'/>
            </div>
        )
    }
}

export default CatGenerator