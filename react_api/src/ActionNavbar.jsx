import React, { Component } from 'react'
import './ActionNavbar.css'

class ActionNavbar extends Component {
    constructor() {
        super()
        this.state = {

        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {

    }

    render() {

        return (
            <div className='action-navbar'>
                <a href='#vote' className='action-navbar-anchor' id='vote'>VOTE</a>
                <a href='#fav' className='action-navbar-anchor' id='fav'>FAVORITES</a>
                <div id='slider'></div>
            </div>
        )
    }
}

export default ActionNavbar