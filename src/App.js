import { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { TeamsTable } from "./TeamsTable";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    
  }

  add(team) {
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
          this.props.onAdd(team);
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
      this.props.onDelete(id);
    });
  }
  
  render() {
    return (
      <div>
        <h1>Teams Networking</h1>
        <div>Search</div>
        <TeamsTable 
          teams={this.props.teams}
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

const mapStateToProps = state => ({
  teams: state.teams
});
const mapDispatchToProps = dispatch => ({
  onAdd: team => dispatch({ type: 'TEAM_ADDED', team }),
  onDelete: id => dispatch({type: 'TEAM_REMOVED', id})
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
