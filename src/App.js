import './App.css';
import { TeamsTable } from "./TeamsTable";

let teams = [
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
];

function App() {
  return (
    <div>
      <h1>Teams Networking</h1>
      <div>Search</div>
      <TeamsTable teams={teams} border={1} />
    </div>
  );
}

export default App;
