import { useState } from "react";
import { SideMenu } from "../menu/SideMenu";
import { TeamsTableWrapper } from "../teams/TeamsTable";
import { Page } from "./models";
import { KnowLanguages } from "../languages/KnowLanguages";
import { TodosApp } from "../todos/components";

type Props = {
  activePage: Page;
};
type Actions = {};

export function ContentWrapper(props: Props & Actions) {
  const [search, setSearch] = useState("");

  const page = props.activePage;

  return (
    <section id="content">
      <SideMenu />
      <div id="main">
        <div className="page" style={{ display: page === "home" ? "block" : "" }}>
          HOME content...
        </div>
        <div className="page" style={{ display: page === "todos" ? "block" : "" }}>
          <h2>TODO List</h2>
          <TodosApp />
        </div>
        <div className="page" style={{ display: page === "teams" ? "block" : "" }}>
          <input
            type="search"
            placeholder="Search"
            value={search}
            onChange={e => {
              setSearch(e.target.value);
            }}
          />
          <span>🔍</span>
          <TeamsTableWrapper search={search} />
        </div>
        <div className="page" style={{ display: page === "languages" ? "block" : "" }}>
          <KnowLanguages />
        </div>
      </div>
    </section>
  );
}
