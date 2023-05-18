import { SideMenu } from "../menu/SideMenu";
import { KnowLanguagesTable } from "./KnowLanguagesTable";

export function ContentWrapper() {
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
