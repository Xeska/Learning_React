import React, { Component } from 'react';
import BurgerLayers from "./BurgerLayers"
import ChoiceHandler from "./ChoiceHandler"
import SubmitOrder from "./SubmitOrder"
import "./App.css"

class App extends Component {
  constructor() {
    super()
    this.state = {
      layers: []
    }
    this.callbackFunction = this.callbackFunction.bind(this)
  }

  callbackFunction = (newLayer) => {
    this.setState({layers: newLayer})
  }

  render() {
    return (
      <div className="box">
        <header>
          <h1>Burger Builder</h1>
        </header>
        <BurgerLayers layers={this.state.layers}/>
        <ChoiceHandler callbackFunction={this.callbackFunction}/>
        <SubmitOrder />
      </div>
    )
  }
}

export default App;
