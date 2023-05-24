import { Page } from "../main/models";
import { MainMenu } from "../menu/MainMenu";
import logo from "./network-team-icon.png";

type Props = {
  activePage: Page;
};
type Actions = {
  setActive(page: Page): void;
};
// interface Props {}
// interface Actions {}

export default function AppHeader(props: Props & Actions) {
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

      <MainMenu active={props.activePage} setActive={props.setActive} />
    </header>
  );
}
