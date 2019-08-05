import React from "react"
import "./BurgerLayers.css"

function BurgerLayers(props) {
    let wholeLayers = []

    for (var i = 0; i < props.layers.length; i++)
    {
        if (props.layers[i] === "salad" 
        || props.layers[i] === "bacon" 
        || props.layers[i] === "cheese" 
        || props.layers[i] === "meat") {
            wholeLayers.push(<div key={i} className={props.layers[i]}></div>)
            
        }
    }
    
    return (
        <div className="burger">
            <div className="top-bread">
                <div className="seeds"></div>
            </div>
            {wholeLayers.length ? wholeLayers : "Please insert the ingredients of your choice !"}
            <div className="base-bread"></div>
        </div>
    )
}

export default BurgerLayers