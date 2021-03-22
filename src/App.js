import { Component } from 'react';
import './App.css';
import { TeamsTable } from "./TeamsTable";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: [],
      date: new Date().toString()
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        date: new Date().toString()
      })
    }, 60000);

    this.load();
  }

  load() {
    fetch("http://localhost:3000/teams-json")
      .then(res => res.json())
      .then(teams => {
        this.setState({
          teams
        });
      });
  }
  
  render() {
    console.debug(this.state.teams);
    return (
      <div>
        <h1>Teams Networking</h1>
        <div>Search</div>
        <TeamsTable teams={this.state.teams} border={1} />
        <div>{this.state.date}</div>
      </div>
    );
  }
}

export default App;
