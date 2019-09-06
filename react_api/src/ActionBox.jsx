import React, { Component } from 'react'
import ActionNavbar from './ActionNavbar'
import CatGenerator from './CatGenerator'
import FavList from './FavList'
import './ActionBox.css'

class ActionBox extends Component {
    constructor() {
        super()
        this.state = {
            page: 'vote',
            fav: []
        }
        this.updatePage = this.updatePage.bind(this)
        this.updateFav = this.updateFav.bind(this)
    }

    updatePage(event) {
        const { id } = event.target

        this.setState({ page: id })
    }

    updateFav(item) {
        const copyFav = this.state.fav

        copyFav.push(item)
        this.setState({ fav: copyFav })
    }

    render () {
        const {page, fav} = this.state

        const toDisplay = page === 'vote' ?
            <CatGenerator fav={fav} updateParentFav={this.updateFav} /> 
            :
            <FavList fav={fav} updateParentFav={this.updateFav} />

        console.log('action box: ', this.state.fav)

        return (
            <div className='actionbox'>
                <ActionNavbar page={page} updateParent={this.updatePage} />
                {toDisplay}
            </div>
        )
    }
}

export default ActionBox