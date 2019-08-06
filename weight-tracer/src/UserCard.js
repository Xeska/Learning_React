import React from "react"
import "./UserCard.css"

function UserCard(props) {
    const { user, weightDatas} = props

    const restrictedTable = weightDatas.map(arr => arr.user === user ? arr : false)
    let userCard = []

    for (let i = 0; i < restrictedTable.length; i++) {
        if (restrictedTable[i])
            userCard = [...userCard, <div key={i}><p>{restrictedTable[i].weight}</p><p style={{fontStyle: "italic"}}>({restrictedTable[i].date})</p></div>]
    }

    return (
        <div className="user-card">{userCard}</div>
    )
}

export default UserCard