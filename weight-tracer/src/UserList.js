import React from "react"
import UserCheckbox from "./UserCheckbox"
import "./UserList.css"

function UserList(props) {
    const { userList } = props
    let displayList = []

    for (let i = 0; i < userList.length; i++) {
        displayList = [...displayList, <UserCheckbox key={i} userList={userList} i={i}/>]
    }

    return (
        <div className="user-list">
            {displayList}
        </div>
    )
}

export default UserList