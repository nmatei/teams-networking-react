import { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { TeamsTable } from "./TeamsTable";
import { FilterContainer } from "./filter";

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

    this.props.onLoad();
  }

  add(team) {
    document.getElementById('main-form').reset();
    this.props.onAdd(team);
  }
  
  render() {
    const f = this.props.filter;
    const teams = this.props.teams.filter(team => team.members.toLowerCase().indexOf(f) > -1);
    return (
      <div>
        <h1>Teams Networking</h1>
        <div>
          <FilterContainer />
        </div>
        <TeamsTable 
          teams={teams}
          border={1}
          onSubmit={team => {
            this.add(team);
          }}
          onDelete={id => {
            this.props.onDelete(id);
          }}
        />
        <div>{this.state.date}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  teams: state.teams,
  filter: state.filter
});
const mapDispatchToProps = dispatch => ({
  onLoad: () => dispatch({ type: 'TEAMS_LOAD' }),
  onAdd: team => dispatch({ type: 'TEAM_ADD', team }),
  onDelete: id => dispatch({type: 'TEAM_REMOVE', id})
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
