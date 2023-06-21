import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./Loader.scss";
import Image from "../assets/barbell-3573104_1280.png";

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
      <img src={Image} alt="" className="img__loader" />
    </div>
  );
};

export default LoaderPage;
