import React from "react"
import "./UserCheckbox.css"

function UserCheckbox(props) {
    const {userList, i} = props

    return (
        <div className="user-checkbox">
            <label>{userList[i].toUpperCase()}</label>
            <input type="checkbox" name={userList[i]}></input>
        </div>
    )
}

export default UserCheckbox