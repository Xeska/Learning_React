import React from 'react';

function App() {
  return (
    <div className="App">
      <header>Weight Tracer</header>
      <label>Make a new entry :</label>
      <select>
        <option>User 1</option>
        <option>User 2</option>
      </select>
      <input type="text" placeholder="weight(kg)"></input>
      <br />
      <label>User 1</label>
      <input type="checkbox" name="user1"></input>
      <br />
      <label>User 2</label>
      <input type="checkbox" name="user2"></input>
      <p>Graph: ???</p>
      <p>History: ???</p>
      <p>Additionnal features: Delete / Modify an entry, identification via connexion</p>
      <footer>User count: ???, Entry count: ???, Most recent entry: ???(??? min ago)</footer>
    </div>
  )
}

export default App;
