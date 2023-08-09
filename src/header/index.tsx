import logo from "../images/network-team-icon.png";
import "./style.css";

export default function AppHeader() {
  return (
    <header>
      <div id="header-wrapper">
        <img src={logo} alt="" width="100" height="100" />
        <div>
          <h1>Teams Networking</h1>
          <h2>CRUD operations example (Create, Read, Update, Delete)</h2>
        </div>
      </div>
    </header>
  );
}
