import React, { Component } from 'react'
import './ActionNavbar.css'

class ActionNavbar extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {

        return (
            <div className='action-navbar'>
                <a href='#vote' className='action-navbar-anchor' id='vote' onClick={this.props.updateParent}>VOTE</a>
                <a href='#fav' className='action-navbar-anchor' id='fav' onClick={this.props.updateParent}>FAVORITES</a>
            </div>
        )
    }
}

export default ActionNavbar