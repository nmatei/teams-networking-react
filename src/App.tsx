import "./style.css";
import { AppFooter } from "./footer/components";
import AppHeader from "./header";
import { ContentWrapper } from "./main/components";

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
