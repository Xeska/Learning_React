import React from "react"
import weightDatas from "./weightDatas"
import UserCard from "./UserCard"
import "./History.css"

function History(props) {

    const { userList } = props
    let toDisplay = []

    for (let i = 0; i < userList.length; i++) {
        if (weightDatas.find((e) => (e.hasOwnProperty(userList[i].name) && userList[i].status === true))) {
            toDisplay = [...toDisplay,
                <div key={i} className="history-card">
                    <h5>{userList[i].name}</h5>
                    <UserCard weightDatas={weightDatas} user={userList[i].name} />
                </div>
                ]
            }
    }

    const emptyCheckString = <div><p className="empty-check-message">Veuillez selectionner les utilisateurs dont vous souhaitez voir l'historique</p><h5 className="empty-data-message">L'utilisateur doit avoir des données enregistrées pour être affiché</h5></div>

    return (
        <div className="history">
            <h3>History: </h3>
            <div className="history-wrapper">
                {toDisplay && toDisplay.length === 0 ? emptyCheckString : toDisplay}
            </div>
        </div>
    )
}

export default History