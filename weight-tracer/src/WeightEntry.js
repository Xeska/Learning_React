import React from "react"
import "./WeightEntry.css"

function WeightEntry(props) {
    let optionArray = [<option key={-1}>{"Username"}</option>]

    for (let i = 0; i < props.userList.length; i++) {
        optionArray = [...optionArray, <option key={i}>{props.userList[i]}</option>]
    }

    return (
        <div className="weight-entry">
            <label className="weight-entry-label">Make a new entry</label>
            <br />
            <select>
                {optionArray}
            </select>
            <br />
            <input 
                className="weight-input" 
                type="text"
                placeholder="78.6 kg"
            >
            </input>
            <br />
            <input type="submit" value="Add a new value !"></input>
        </div>
    )
}

export default WeightEntry