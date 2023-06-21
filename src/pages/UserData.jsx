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
      <div dir={`${i18n.language === "ar" && "rtl"}`}>
        <h2>
          {t("Thank You")} {name}
        </h2>
        <h2>{bmr}</h2>
        <h2>{minCalorie}</h2>
        <h2>{maxCalorie}</h2>
      </div>
      <LoaderPage />
    </>
  );
};

export default UserData;
