import React, { Component } from 'react';
import Header from "./Header"
import WeightEntry from "./WeightEntry"
import UserList from "./UserList"
import History from "./History"
import "./App.css"

class App extends Component {
  constructor() {
    super()
    this.state = {
      userList: [
        {name: "bboutoil", status: false}, 
        {name: "anas", status: false}, 
        {name: "pierre", status :false}, 
        {name: "paul", status :false}, 
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
    console.log("render", this.state.userList)
    return (
      <div className="App">
        <Header />
        <WeightEntry userList={this.state.userList}/>
        <UserList userList={this.state.userList} onChange={this.handleChange}/>
        <p>Graph: ???</p>
        <History userList={this.state.userList}/>
        <br />
        <br />
        <br />
        <br />
        <br />
        <p>Additionnal features: Delete / Modify an entry, identification via connexion, tri des users par ordre alphabetique</p>
        <footer>User count: ???, Entry count: ???, Most recent entry: ???(??? min ago)</footer>
      </div>
    )
  }
}

export default App;
