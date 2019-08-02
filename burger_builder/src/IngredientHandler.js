import React from "react"

function IngredientHandler(props) {
    return (
            <div className="action">
                <p>{props.name.toUpperCase()}: {props.data.count[props.name]}</p>
                <button 
                    name={props.name} 
                    value="plus" 
                    className="button-plus" 
                    onClick={props.handleClick}>+
                </button>
                <button
                    name={props.name} 
                    value="minus" 
                    className="button-minus" 
                    onClick={props.handleClick}>-
                </button>
            </div>
    )
}

export default IngredientHandler