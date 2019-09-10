import React from 'react'
import './FavList.css'

class FavList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            displayIdx: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event) {
        const { id } = event.target

        if (id === 'next') {
            this.setState(prev => ({
                displayIdx: prev.displayIdx + 1
            }))
        } else {
            this.setState(prev => ({
                displayIdx: prev.displayIdx - 1
            }))
        }
    }

    render() {
        const { displayIdx } = this.state
        const { fav } = this.props
        const toDisplay = fav.map(x => <img src={x} alt="fav-neko-img" />)
        const prevButtonDisplay = displayIdx === 0 ? '' : <button id='previous' className="previous-btn" onClick={this.handleClick}>Previous</button>
        const nextButtonDisplay = displayIdx >= fav.length - 1 ? '' : <button id='next' className="next-btn" onClick={this.handleClick}>Next</button>

        console.log(displayIdx)

        return (
            <div className="favlist-content">
                <div className="favlist-btn">
                    {prevButtonDisplay}
                    {nextButtonDisplay}
                </div>
                {toDisplay[displayIdx]}
            </div>
        )
    }
}

export default FavList