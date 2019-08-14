import React, { Component } from 'react';
import Header from "./Header"
import WeightEntry from "./WeightEntry"
import UserList from "./UserList"
import GraphicDisplay from "./GraphicDisplay"
import History from "./History"
import "./App.css"

class App extends Component {
  constructor() {
    super()
    this.state = {
      userList: [
        {name: "bboutoil", status: false}, 
        {name: "anas", status: false}, 
        {name: "pierre", status: false}, 
        {name: "paul", status: false}, 
        {name: "jacques", status: false}
      ]
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(row) {
    let copyList = [...this.state.userList]

    copyList[row].status = !copyList[row].status
    this.setState({userList: copyList})
  }

  render() {
    const { userList } = this.state

    return (
      <div className="App">
        <Header />
        <WeightEntry userList={userList}/>
        <UserList userList={userList} onChange={this.handleChange}/>
        <GraphicDisplay userList={userList} />
        <History userList={userList}/>
      </div>
    )
  }
}

export default App;
