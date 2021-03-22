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
    console.warn('mount');

    setInterval(() => {
      this.setState({
        date: new Date().toString()
      })
    }, 60000);

    setTimeout(() => {
      console.warn("loaded");
      this.setState({
        teams: [
          {
            "name": "CV",
            "members": "Nicolae Matei",
            "url": "https://github.com/nmatei/nmatei2.github.io"
          },
          {
            "name": "teams-networking",
            "members": "Nicolae Matei",
            "url": "https://github.com/nmatei/teams-networking/tree/won2"
          }
        ]
      })
    }, 2000);
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
