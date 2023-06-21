import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ThemeContext } from "../context/theme-context";
import "./Navbar.scss";
import { useContext, useEffect, useState } from "react";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import LoaderPage from "./Loader";

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [loader, setLoader] = useState(false);

  const [t, i18n] = useTranslation();

  const changeLanguage = () => {
    setLoader((prevLoader) => !prevLoader);
  };

  useEffect(() => {
    if (loader === true) {
      setTimeout(() => {
        setLoader((prevLoader) => !prevLoader);
      }, 1000);
    }
  }, [loader, setLoader]);

  const changeTheme = () => {
    setTheme((prevTheme) => !prevTheme);
  };
  return (
    <>
      <header className="header" dir={`${i18n.language === "ar" && "rtl"}`}>
        <div className="logo">
          <Link to="/">
            <h1>{t("BE FITNESS")}</h1>
          </Link>
        </div>
        <nav className="navbar">
          <ul className="navbar__links">
            <li className="btn">
              {i18n.language === "en" && (
                <button
                  onClick={() => {
                    changeLanguage();
                    i18n.changeLanguage("ar");
                  }}
                  className="btn__lang"
                >
                  AR
                </button>
              )}
              {i18n.language === "ar" && (
                <button
                  onClick={() => {
                    changeLanguage();
                    i18n.changeLanguage("en");
                  }}
                  className="btn__lang"
                >
                  EN
                </button>
              )}
            </li>
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
      {loader && <LoaderPage />}
    </>
  );
};

export default Navbar;
