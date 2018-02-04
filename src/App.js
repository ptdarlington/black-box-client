import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
    this.loadCommentsFromServer = this.loadCommentsFromServer.bind(this);
    this.renderBoxes = this.renderBoxes.bind(this);
  }

  loadCommentsFromServer() {
    axios.get('http://localhost:3001/api/boxes').then(res => {
      this.setState({ data: res.data });
    });
  }

  componentDidMount() {
    this.loadCommentsFromServer();
  }

  renderBoxes() {
    return this.state.data.map(function(box) {
      return <tr key={box}><td>{box.name}</td><td>{box.createdAt}</td></tr>;
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Black Box</h1>
          <h2>Take a look inside...</h2>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Created</th>
              </tr>
            </thead>
            <tbody>
              { this.renderBoxes() }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
