import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Page } from "../main/models";
import "./menu.css";
import ToggleButton from "@mui/material/ToggleButton";

type Props = {
  active: Page;
};
type Actions = {
  setActive(page: Page): void;
};

type MenuElement = { text: string; name: Page };

export function MainMenu(props: Props & Actions) {
  const active = props.active;
  const elements: MenuElement[] = [
    { text: "Home", name: "home" },
    { text: "Todos", name: "todos" },
    { text: "Teams", name: "teams" },
    { text: "Languages", name: "languages" }
  ];
  return (
    <ToggleButtonGroup
      value={active}
      exclusive
      onChange={(e, active: Page) => {
        props.setActive(active);
      }}
      aria-label="text alignment"
    >
      {elements.map(element => (
        <ToggleButton key={element.name} value={element.name}>
          {element.text}
        </ToggleButton>
      ))}
      {/* <ToggleButton value="home">Home</ToggleButton>
      <ToggleButton value="todos">Todos</ToggleButton>
      <ToggleButton value="teams">Teams</ToggleButton>
      <ToggleButton value="languages">Languages</ToggleButton> */}
    </ToggleButtonGroup>
  );
}

export function MainMenu_old(props: Props & Actions) {
  const active = props.active;
  const elements: MenuElement[] = [
    { text: "Home", name: "home" },
    { text: "Todos", name: "todos" },
    { text: "Teams", name: "teams" },
    { text: "Languages", name: "languages" }
  ];
  return (
    <ul id="top-menu-bar">
      {elements.map(element => (
        <li key={element.name}>
          <a
            href={"#" + element.name}
            className={active === element.name ? "active" : ""}
            onClick={() => {
              props.setActive(element.name);
            }}
          >
            {element.text}
          </a>
        </li>
      ))}
    </ul>
  );
}
