import selfie from "../images/seflie.jpg";
import MainMenu from "../menu/MainMenu";

export default function AppHeader() {
  return (
    <header>
      <div id="header-wrapper">
        <div id="my-picture">
          <img src={selfie} alt="my picture" height="100" />
        </div>
        <div id="header-info">
          <h1>Matei Nicolae</h1>
          <h2 id="job-title">Trainer @ FastTrackIT & Udemy</h2>
        </div>
      </div>
      <MainMenu />
    </header>
  );
}
