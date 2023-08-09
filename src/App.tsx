import React from "react";
import logo from "./images/network-team-icon.png";
import "./App.css";
import "./style.css";

function App_old() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

function AppHeader() {
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

function ContentWrapper() {
  return <section id="main">...</section>;
}

function AppFooter() {
  return <footer>📃 API Docs | 👨‍💻 Source Code</footer>;
}

function App() {
  return (
    <div>
      <AppHeader />
      <ContentWrapper />
      <AppFooter />
    </div>
  );
}

export default App;
