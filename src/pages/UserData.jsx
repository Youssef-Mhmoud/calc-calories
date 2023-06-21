import { useContext } from "react";
import { UserContext } from "../context/userData-context";
import { useTranslation } from "react-i18next";
import "./UserData.scss";
import LoaderPage from "../components/Loader";

const UserData = () => {
  const { name, bmr, minCalorie, maxCalorie } = useContext(UserContext);
  const [t, i18n] = useTranslation();

  return (
    <>
      <div className="msg__details" dir={`${i18n.language === "ar" && "rtl"}`}>
        <p className="msg_name">
          {t("Thank You")}
          <span className="user__name"> {name} </span>
          {t("for")}
        </p>
        <p className="bmr">
          {t("bmr")} <span>{bmr}</span>
        </p>
        <div className="cal__box">
          <p className="min__cal">
            {t("minCal")} <br />
            <span>{minCalorie}</span>
          </p>
          <p className="max__cal">
            {t("maxCal")} <br /> <span>{maxCalorie}</span>
          </p>
        </div>
      </div>
      <LoaderPage />
    </>
  );
};

export default UserData;
