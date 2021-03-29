import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';


const teams = (state = [], action) => {
  console.warn('teams', state, action);
  switch (action.type) {
    case 'TEAMS_LOADED': {
      return action.teams
    }
    case 'TEAM_ADDED': {
      return [...state, action.team];
    }
    case 'TEAM_REMOVED': {
      return state.filter(team => team.id !== action.id);
    }
    default:
      return state;
  }
};

const count = (state = 0, action) => {
  switch (action.type) {
    case 'TEAMS_LOADED': {
      return action.teams.length
    }
    case 'TEAM_ADDED': {
      return state + 1;
    }
    case 'TEAM_REMOVED': {
      return state - 1;
    }
    default:
      return state;
  }
};

const filter = (state = '', action) => {
  switch (action.type) {
    case 'FILTER_CHANGED': {
      return action.filter
    }
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  teams,
  count,
  filter
});

// used for async actions
const teamsMdl = store => next => action => {
  console.info('middleare', action, store.getState());
  switch(action.type) {
    case 'TEAMS_LOAD': {
      fetch("http://localhost:3000/teams-json")
        .then(res => res.json())
        .then(teams => {
          store.dispatch({ type: 'TEAMS_LOADED', teams });
        });
      break;
    }
    case 'TEAM_ADD': {
      const team = action.team;
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
            store.dispatch({ type: 'TEAM_ADDED', team });
          }
        });
      break;
    }
    case 'TEAM_REMOVE': {
      fetch("http://localhost:3000/teams-json/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ id: action.id })
      }).then(r => r.json()).then(status => {
        store.dispatch({ type: 'TEAM_REMOVED', id: action.id })
      });
      break;
    }
  }
  return next(action);
};

const store = createStore(rootReducer, applyMiddleware(teamsMdl));
console.warn('store', store);

store.subscribe(() => {
  console.warn('data changed', store.getState());
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
