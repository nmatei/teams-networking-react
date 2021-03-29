export const teams = (state = [], action) => {
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