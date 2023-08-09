import React from "react";
import logo from "./images/network-team-icon.png";
import "./style.css";

function AppHeader() {
  return (
    <header>
      <div id="header-wrapper">
        <img src={logo} className="App-logo" alt="" width="100" height="100" />
        <div>
          <h1>Teams Networking</h1>
          <h2>CRUD operations example (Create, Read, Update, Delete)</h2>
        </div>
      </div>
    </header>
  );
}

function Toolbar() {
  return (
    <div className="tbar">
      <button id="removeSelected">❌ Remove selected</button>
      <div className="tfill"></div>
      <input type="search" name="search" id="search" placeholder="Search" />
      <label htmlFor="search">🔎</label>
    </div>
  );
}

function ContentWrapper() {
  return (
    <section id="main">
      <Toolbar />
      TODO table...
    </section>
  );
}

function AppFooter() {
  return <footer>📃 API Docs | 👨‍💻 Source Code</footer>;
}

function App() {
  return (
    <>
      <AppHeader />
      <ContentWrapper />
      <AppFooter />
    </>
  );
}

export default App;
