export const filter = (state = '', action) => {
  switch (action.type) {
    case 'FILTER_CHANGED': {
      return action.filter
    }
    default:
      return state;
  }
};

export const count = (state = 0, action) => {
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