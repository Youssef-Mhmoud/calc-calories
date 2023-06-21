import { useTranslation } from "react-i18next";
import "./UserData.scss";

const UserData = () => {
  const [t] = useTranslation();
  return (
    <>
      <h2 className="title">{t("title")}</h2>
      <form action="" className="form">
        {/* User Name */}
        <div className="user__name">
          <label htmlFor="username">{t("Name")}</label>
          <br />
          <input type="text" id="username" />
        </div>
        {/* BMR for men weight X 1 X 24*/}
        {/* BMR for women weight X .9 X 24*/}
        <div className="weight-form">
          <label htmlFor="weight">{t("Your Weight")}</label>
          <br />
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
            <label htmlFor="little">LITTLE</label>
            <input type="radio" id="little" value="little" name="activity" />
          </div>
          <div>
            <label htmlFor="middle">LITTLE</label>
            <input type="radio" id="middle" value="middle" name="activity" />
          </div>
          <div>
            <label htmlFor="high">LITTLE</label>
            <input type="radio" id="high" value="high" name="activity" />
          </div>
        </div>
        <button type="submit" className="btn btn__submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default UserData;
