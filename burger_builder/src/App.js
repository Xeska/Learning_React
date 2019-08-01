import React from 'react';
import BurgerLayers from "./BurgerLayers"
import ChoiceHandler from "./ChoiceHandler"
import "./App.css"

function App() {
  return (
    <div className="box">
      <header>
        <h1>Burger Builder</h1>
      </header>
      <BurgerLayers />
      <ChoiceHandler />
    </div>
  )
}

export default App;
