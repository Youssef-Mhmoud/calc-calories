import { useTranslation } from "react-i18next";
import "./UserData.scss";

const UserData = () => {
  const [t] = useTranslation();
  return (
    <>
      <h2 className="title">{t("title")}</h2>
      <form action="" className="form">
        {/* User Name */}
        <div>
          <label htmlFor="username">{t("Name")}</label>
          <input type="text" id="username" />
        </div>
        {/* BMR for men weight X 1 X 24*/}
        {/* BMR for women weight X .9 X 24*/}
        <div>
          <label htmlFor="weight">{t("Your Weight")}</label>
          <input type="number" step="0.1" id="weight" />
        </div>
        {/* Gender */}
        <div className="gender-form">
          <h2 htmlFor="gender">{t("Gender")}</h2>
          <div className="gender__box">
            <div>
              <label htmlFor="man">{t("Man")}</label>
              <input type="radio" id="man" name="gender" value="man" />
            </div>
            <div>
              <label htmlFor="woman">{t("Woman")}</label>
              <input type="radio" id="woman" name="gender" value="woman" />
            </div>
          </div>
        </div>
        {/* Level of Activity */}
        <h2>{t("Exercise Intensity")}</h2>
        <div className="activity-form">
          <div>
            <input type="radio" id="little" value="little" name="activity" />
            <label htmlFor="little">LITTLE</label>
          </div>
          <div>
            <input type="radio" id="middle" value="middle" name="activity" />
            <label htmlFor="middle">LITTLE</label>
          </div>
          <div>
            <input type="radio" id="high" value="high" name="activity" />
            <label htmlFor="high">LITTLE</label>
          </div>
        </div>
      </form>
    </>
  );
};

export default UserData;
