import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Loader from "react-loaders";
import "./Loader.scss";

const LoaderPage = () => {
  const [zIndex, setZIndex] = useState();
  const [t] = useTranslation();

  useEffect(() => {
    setTimeout(() => {
      setZIndex({ zIndex: "-1" });
    }, 3000);
  });

  return (
    <div className="loader-page" style={zIndex}>
      <h2>{t("BE FITNESS")}</h2>
      <Loader type="ball-pulse" innerClassName="load" />
    </div>
  );
};

export default LoaderPage;
