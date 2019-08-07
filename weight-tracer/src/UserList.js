import React, { Component } from "react"
import UserCheckbox from "./UserCheckbox"
import "./UserList.css"

class UserList extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render () {
        const { userList, onChange } = this.props
        let displayList = []

        for (let i = 0; i < userList.length; i++) {
            displayList = [...displayList, 
            <UserCheckbox 
                key={i} 
                userList={userList} 
                i={i}
                onChange={onChange}
                checked={userList[i].status}
            />]
        }
        return (
            <div className="user-list">
                {displayList}
            </div>
        )
    }
}

export default UserList