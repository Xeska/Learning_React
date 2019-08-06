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
      userList: ["bboutoil", "caru", "pierre", "paul", "jacques"],
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <WeightEntry userList={this.state.userList}/>
        <UserList userList={this.state.userList}/>
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
