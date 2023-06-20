import Navbar from "./components/Navbar";
import "./App.scss";
import { useContext } from "react";
import { ThemeContext } from "./context/theme-context";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${theme ? "App dark" : "App"}`}>
      <Navbar />
    </div>
  );
}

export default App;
