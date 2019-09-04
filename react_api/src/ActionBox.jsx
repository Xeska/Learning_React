import React from 'react'
import ActionNavbar from './ActionNavbar'
import CatGenerator from './CatGenerator'
import './ActionBox.css'

function ActionBox() {
    return (
        <div className='actionbox'>
            <ActionNavbar />
            <CatGenerator />
        </div>
    )
}

export default ActionBox