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

  add(team) {
    console.warn('team', team);
    document.getElementById('main-form').reset();

    fetch("http://localhost:3000/teams-json/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(team)
    })
      .then(res => res.json())
      .then(r => {
        console.warn(r);
        if (r.success) {
          team.id = r.id;
          const teams = this.state.teams.concat(team);
          this.setState({
            teams
          });
          //this.load();
        }
      });
  }

  remove(id) {
    fetch("http://localhost:3000/teams-json/delete", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id })
    }).then(r => r.json()).then(status => {
      this.load();
    });
  }
  
  render() {
    console.debug(this.state.teams);
    return (
      <div>
        <h1>Teams Networking</h1>
        <div>Search</div>
        <TeamsTable 
          teams={this.state.teams}
          border={1}
          onSubmit={team => {
            this.add(team);
          }}
          onDelete={id => {
            this.remove(id);
          }}
        />
        <div>{this.state.date}</div>
      </div>
    );
  }
}

export default App;
