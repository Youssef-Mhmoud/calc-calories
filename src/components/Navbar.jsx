import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ThemeContext } from "../context/theme-context";
import "./Navbar.scss";
import { useContext } from "react";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const changeTheme = () => {
    setTheme((prevTheme) => !prevTheme);
  };
  return (
    <header className="header">
      <div className="logo">
        <h1>GYM LOGO</h1>
      </div>
      <nav className="navbar">
        <ul className="navbar__links">
          <li className="btn btn__dark-mode" onClick={changeTheme}>
            {theme ? (
              <FontAwesomeIcon icon={faSun} className="sun__icon" />
            ) : (
              <FontAwesomeIcon icon={faMoon} className="moon__icon" />
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
