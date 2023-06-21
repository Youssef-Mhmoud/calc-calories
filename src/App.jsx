import Navbar from "./components/Navbar";
import "./App.scss";
import { useContext } from "react";
import { ThemeContext } from "./context/theme-context";
import { LoaderContext } from "./context/loader-context";
import UserData from "./components/UserData";

function App() {
  const { theme } = useContext(ThemeContext);
  const { loader } = useContext(LoaderContext);

  return (
    <>
      <div className={`${theme ? "App dark" : "App"}`}>
        <Navbar />
        <UserData />
      </div>
      {loader && <div className="loader">Loading...</div>}
    </>
  );
}

export default App;
