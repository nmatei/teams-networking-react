// import React from "react";
import React, { useState } from "react";
import logo from "./logo.svg";
import selfie from "./images/selfie.jpg";
import colorblind from "./images/colorblind.png";
import "./App.css";
import "./loading.css";
import { TeamsTableComponent } from "./teams/TeamsTable";

function MainMenu() {
  return (
    <ul id="top-menu-bar">
      <li>
        <a href="#home" data-page="home">
          Home
        </a>
      </li>
      <li>
        <a href="#skills" data-page="skills">
          Skills
        </a>
      </li>
      <li>
        <a href="#projects" data-page="projects">
          Projects
        </a>
      </li>
      <li>
        <a href="#languages" data-page="languages">
          Languages
        </a>
      </li>
      <li>
        <a href="#rubik" data-page="rubik">
          💠Rubik's
        </a>
      </li>
    </ul>
  );
}

function SideMenu() {
  return (
    <div id="side-menu">
      <section>
        <h2>Contact Form</h2>
        <form action="" id="contact-form">
          <div className="form-row">
            <label htmlFor="e">Email</label>
            <input type="email" id="e" name="em" placeholder="example@job.com" />
          </div>
          <div className="form-row">
            <label htmlFor="contactName">Name</label>
            <input type="text" id="contactName" name="nume" placeholder="Your name" />
          </div>
          <div className="actions">
            <button type="submit">Contact Us</button>
          </div>
        </form>
      </section>

      <section>
        <h2>Rubik face challange</h2>
        <form action="" id="rubikChallange">
          <div className="top-toolbar">
            <input type="number" name="size" min="1" max="10" required />
            <button className="scrambleFace" type="submit">
              🔃 Scramble
            </button>
          </div>
          <div className="rubik-face"></div>
        </form>
      </section>

      <section>
        <h2>React</h2>
        <img src={logo} className="App-logo" alt="logo" />
      </section>
    </div>
  );
}

function AppFooter() {
  return (
    <footer>
      <a href="https://www.linkedin.com/in/nicolaematei" target="_blank">
        <svg
          style={{ verticalAlign: "top" }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          data-supported-dps="24x24"
          fill="currentColor"
          className="mercado-match"
          width="17"
          height="17"
          focusable="false"
        >
          <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
        </svg>
        LinkedIn
      </a>
      |
      <a target="_blank" href="https://fasttrackit.org/curs-web-cluj-napoca/">
        🏤 Trainings
      </a>
      |
      <a
        target="_blank"
        href="https://www.youtube.com/c/mateinick"
        style={{
          padding: "0 5px",
          lineHeight: "inherit"
        }}
      >
        <img height="20" src="images/youtube.png" />
      </a>
    </footer>
  );
}

function AppHeader() {
  return (
    <header>
      <div id="header-wrapper">
        <div id="my-picture">
          <img src={selfie} width="100" alt="Nicolae" />
        </div>
        <div id="header-info">
          <h1>Matei Nicolae</h1>
          <h2 id="job-title">
            Web Technical Lead @
            <a href="https://www.rws.com/" target="_blank">
              RWS
            </a>{" "}
            & Trainer @
            <a href="https://fasttrackit.org/" target="_blank">
              FastTrackIT
            </a>
          </h2>
        </div>
        <div>
          <img
            id="colorblind"
            src={colorblind}
            alt="colorblind"
            height="24"
            className="link"
            title="Check Site for colorblind people"
          />
        </div>
      </div>
      <MainMenu />
    </header>
  );
}

function ContentWrapper() {
  return (
    <section id="content">
      <SideMenu />
      <div id="main">
        <Example />
        <TeamsTableComponent />
        <Example></Example>
      </div>
    </section>
  );
}

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
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

export default App;
