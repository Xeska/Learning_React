import React from "react"
import "./UserCheckbox.css"

function UserCheckbox(props) {
    const {userList, i, checked} = props

    return (
        <div className="user-checkbox">
            <label>{userList[i].name.toUpperCase()}</label>
            <input type="checkbox" name={userList[i].name} onChange={() => props.onChange(i)} checked={checked}></input>
        </div>
    )
}

export default UserCheckbox