import "./App.scss";
import { useContext } from "react";
import { ThemeContext } from "./context/theme-context";
// import { LoaderContext } from "./context/loader-context";
import UserForm from "./components/UserForm";
import { Route, Routes } from "react-router-dom";
import UserData from "./pages/UserData";
import Layout from "./components/Layout";

function App() {
  const { theme } = useContext(ThemeContext);
  // const { loader } = useContext(LoaderContext);

  return (
    <>
      <div className={`${theme ? "App dark" : "App"}`}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<UserForm />} />
            <Route path="/user-data" element={<UserData />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
