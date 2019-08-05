import React from "react"
import "./RestartButton.css"

function RestartButton(props) {
    return (
        <div>
            <button
                className="restart-button" 
                onClick={props.handleRestart}
            >
            Réinitialiser la commande
            </button>
        </div>
    )
}

export default RestartButton