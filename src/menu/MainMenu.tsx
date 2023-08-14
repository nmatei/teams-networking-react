import "./menu.css";

export function MainMenu() {
  const active: string = "teams";
  return (
    <ul id="top-menu-bar">
      <li>
        <a href="#home" className={active === "home" ? "active" : ""}>
          Home
        </a>
      </li>
      <li>
        <a href="#skills" className={active === "home" ? "active" : ""}>
          Todos
        </a>
      </li>
      <li>
        <a href="#projects" className={active === "home" ? "active" : ""}>
          Teams
        </a>
      </li>
    </ul>
  );
}
