import React from "react";
import logo from "./logo.svg";

import "./App.css";
import { AppFooter } from "./footer/components";
import AppHeader from "./header";

function ContentWrapper() {
  return (
    <section id="content">
      <SideMenu />
      <div id="main">
        <div className="page" id="home">
          <h2>Home</h2>
          <p>
            Hello, <strong>welcome</strong> to my site.
          </p>
          <p>This page is about me...</p>
          <p>
            I want <strong>this</strong> text to have both
            <strong>
              Bold <i>and</i>
            </strong>{" "}
            <i>Italic</i>
          </p>
        </div>

        <div className="page" id="skills">
          <h2>Skills & Endorcements</h2>
          <ul></ul>
        </div>

        <div className="page" id="teams" style={{ display: "block" }}>
          <h2>Teams</h2>
          <p>This are the projects I've been working on...</p>
        </div>

        <div className="page" id="languages">
          <h2>Known Languages</h2>
          <KnowLanguagesTable />
        </div>
      </div>
    </section>
  );
}

function KnowLanguagesTable() {
  return (
    <table border={1}>
      <thead>
        <tr>
          <th>Language</th>
          <th>Level</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Romanian</td>
          <td>Native</td>
        </tr>
        <tr>
          <td>English</td>
          <td>Professional</td>
        </tr>
      </tbody>
    </table>
  );
}

function SideMenu() {
  return (
    <div id="side-menu">
      <section>
        <h2>Contact Form</h2>
        <form action="images/seflie.jpg" method="post">
          <label htmlFor="contact-email">Email</label>
          <input type="email" name="email" id="contact-email" required placeholder="hr@company.com" />
          <br />
          <label htmlFor="contact-name">Name</label>
          <input type="text" name="name" id="contact-name" required placeholder="Enter your Name" />
          <br />
          <label htmlFor="contact-reason">Reason</label>
          <input type="text" name="reason" id="contact-reason" required placeholder="Reason for contacting me" />
          <br />
          <button type="submit">Contact Us</button>
        </form>
      </section>
      <section>
        <h2>Rubik's Face</h2>
        <RubikCube />
      </section>
    </div>
  );
}

function RubikCube() {
  return (
    <div className="rubik-face">
      <div style={{ background: "#0082df" }}></div>
      <div style={{ background: "#ffff00" }}></div>
      <div style={{ background: "#ff2c0a" }}></div>
      <div style={{ background: "#ffff00" }}></div>
      <div style={{ background: "#ff2c0a" }}></div>
      <div style={{ background: "#0082df" }}></div>
      <div style={{ background: "#ff2c0a" }}></div>
      <div style={{ background: "#0082df" }}></div>
      <div style={{ background: "#ffff00" }}></div>
    </div>
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

function Old_App() {
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
