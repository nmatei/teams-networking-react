import React from "react";
import logo from "./network-team-icon.png";
import "./App.css";

function AppHeader() {
  return (
    <header>
      <div id="header-wrapper">
        <div>
          <img src={logo} alt="Selfie" height="100" />
        </div>
        <div>
          <h1>Matei Nicolae</h1>
          <h2 id="job-title">Web Tehnical Lead @ RWS</h2>
        </div>
      </div>

      <MainMenu />
    </header>
  );
}

function MainMenu() {
  return (
    <ul id="top-menu-bar">
      <li>
        <a href="#" data-page="home">
          Home
        </a>
      </li>
      <li>
        <a href="#" data-page="skills">
          Skills
        </a>
      </li>
      <li>
        <a href="#" data-page="projects">
          Projects
        </a>
      </li>
      <li>
        <a href="#" data-page="languages">
          Languages
        </a>
      </li>
    </ul>
  );
}

function SideMenu() {
  return (
    <div id="side-menu">
      <section>
        <form action="" method="post">
          <label htmlFor="userEmail">Email</label>
          <input type="email" name="email" id="userEmail" placeholder="example@me.com" required />

          <button type="submit">Send</button>
        </form>
      </section>
      <section>M2</section>
    </div>
  );
}

function ContentWrapper() {
  return (
    <section id="content">
      <SideMenu />
      <div id="main">
        <div className="page" id="home">
          HOME content...
        </div>
        <div className="page" id="skills">
          <h2>Skills & Endorcements</h2>
          <ul></ul>
        </div>
        <div className="page" id="projects">
          Projects content...
        </div>
        <div className="page" id="languages">
          Languages content...
        </div>
      </div>
    </section>
  );
}

function AppFooter() {
  return (
    <footer>
      <a href="">Linkedin</a>
    </footer>
  );
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

export default App;
