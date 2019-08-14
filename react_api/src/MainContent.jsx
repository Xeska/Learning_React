import React from "react"
import ActionBox from './ActionBox'
import "./MainContent.css"
import neko from "./images/neko.jpg"

function MainContent() {
    return (
        <div className='home-content'>
            <img className='home-image' src={neko} alt='Neko' ></img>
            <h1 className='home-sentence' >Everyday is Catuuurday</h1>
            <ActionBox />
        </div>
    )
}

export default MainContent