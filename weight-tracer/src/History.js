import React from "react"
import weightDatas from "./weightDatas"
import UserCard from "./UserCard"
import "./History.css"

function History(props) {

    const { userList } = props
    let toDisplay = []

    for (let i = 0; i < userList.length; i++) {
        if (weightDatas.find((e) => userList[i] === e.user)) {
            toDisplay = [...toDisplay,
                <div className="history-card">
                    <h5 key={-i - 1}>{userList[i]}</h5>
                    <UserCard key={i} weightDatas={weightDatas} user={userList[i]} />
                </div>
                ]
            }
    }

    return (
        <div className="history">
            <h3>History: </h3>
            <div className="history-wrapper">{toDisplay}</div>
        </div>
    )
}

export default History