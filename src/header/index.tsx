import { useState } from "react";
import selfie from "../images/seflie.jpg";
import MainMenu from "../menu/MainMenu";

export default function AppHeader() {
  const [active, setActive] = useState("teams");

  //console.warn("render AppHeader", active);

  return (
    <header>
      <div id="header-wrapper">
        <div id="my-picture">
          <img src={selfie} alt="my picture" height="100" />
        </div>
        <div id="header-info">
          <h1>Matei Nicolae : {active}</h1>
          <h2 id="job-title">Trainer @ FastTrackIT & Udemy</h2>
        </div>
      </div>
      <MainMenu
        active={active}
        setActive={page => {
          console.warn("active", page);
          setActive(page);
        }}
      />
    </header>
  );
}
