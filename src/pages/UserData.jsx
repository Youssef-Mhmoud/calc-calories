import { useContext } from "react";
import { UserContext } from "../context/userData-context";
import { useTranslation } from "react-i18next";

const UserData = () => {
  const { name, bmr, minCalorie, maxCalorie } = useContext(UserContext);
  const [t] = useTranslation();

  return (
    <div>
      <h2>
        {t("Thank You")} {name}
      </h2>
      <h2>{bmr}</h2>
      <h2>{minCalorie}</h2>
      <h2>{maxCalorie}</h2>
    </div>
  );
};

export default UserData;
