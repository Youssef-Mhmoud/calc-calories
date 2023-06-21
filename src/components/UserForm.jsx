import { useTranslation } from "react-i18next";
import "./UserForm.scss";
import { useContext, useState } from "react";
import { UserContext } from "../context/userData-context";
import { useNavigate } from "react-router-dom";
import LoaderPage from "./Loader";

const UserForm = () => {
  const [t, i18n] = useTranslation();
  const [weight, setWeight] = useState();
  const [gender, setGender] = useState();
  const [activity, setActivity] = useState();

  const { setName, setBMR, setMinCalorie, setMaxCalorie } =
    useContext(UserContext);

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    const calcBMRMen = +weight * 1 * 24;
    const calcBMRWomen = +weight * 0.9 * 24;

    // Calculate The BMR for the Men
    switch (gender) {
      case "man":
        setBMR(() => calcBMRMen);
        break;
      case "woman":
        setBMR(() => calcBMRMen);
        break;
    }

    // For Men
    if (gender === "man" && activity === "inactive") {
      setMinCalorie(calcBMRMen * 0.25 + calcBMRMen);
      setMaxCalorie(calcBMRMen * 0.4 + calcBMRMen);
    }
    if (gender === "man" && activity === "light_active") {
      setMinCalorie(calcBMRMen * 0.5 + calcBMRMen);
      setMaxCalorie(calcBMRMen * 0.7 + calcBMRMen);
    }
    if (gender === "man" && activity === "moderately_active") {
      setMinCalorie(calcBMRMen * 0.65 + calcBMRMen);
      setMaxCalorie(calcBMRMen * 0.8 + calcBMRMen);
    }
    if (gender === "man" && activity === "heavily_active") {
      setMinCalorie(calcBMRMen * 0.9 + calcBMRMen);
      setMaxCalorie(calcBMRMen * 1.2 + calcBMRMen);
    }

    // For Woman
    if (gender === "woman" && activity === "inactive") {
      setMinCalorie(calcBMRWomen * 0.25 + calcBMRWomen);
      setMaxCalorie(calcBMRWomen * 0.35 + calcBMRWomen);
    }
    if (gender === "woman" && activity === "light_active") {
      setMinCalorie(calcBMRWomen * 0.4 + calcBMRWomen);
      setMaxCalorie(calcBMRWomen * 0.6 + calcBMRWomen);
    }
    if (gender === "woman" && activity === "moderately_active") {
      setMinCalorie(calcBMRWomen * 0.5 + calcBMRWomen);
      setMaxCalorie(calcBMRWomen * 0.7 + calcBMRWomen);
    }
    if (gender === "woman" && activity === "heavily_active") {
      setMinCalorie(calcBMRWomen * 0.8 + calcBMRWomen);
      setMaxCalorie(calcBMRWomen * 1 + calcBMRWomen);
    }

    navigate("/user-data");
  };

  return (
    <>
      <h2 className="title" dir={`${i18n.language === "ar" && "rtl"}`}>
        {t("title")}
      </h2>
      <form
        action=""
        className="form"
        onSubmit={submitHandler}
        dir={`${i18n.language === "ar" && "rtl"}`}
      >
        {/* User Name */}
        <div className="user__name">
          <label htmlFor="username">{t("Name")}</label>
          <br />
          <input
            type="text"
            id="username"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        {/* BMR for men weight X 1 X 24*/}
        {/* BMR for women weight X .9 X 24*/}
        <div className="weight-form">
          <label htmlFor="weight">{t("Your Weight")}</label>
          <br />
          <input
            type="number"
            step="0.1"
            min={0}
            id="weight"
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        {/* Gender */}
        <div className="gender-form">
          <h2 htmlFor="gender">{t("Gender")}</h2>
          <div className="gender__box">
            <div>
              <label htmlFor="man">{t("Man")}</label>
              <input
                type="radio"
                id="man"
                name="gender"
                value="man"
                onChange={(e) => setGender(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="woman">{t("Woman")}</label>
              <input
                type="radio"
                id="woman"
                name="gender"
                value="woman"
                onChange={(e) => setGender(e.target.value)}
              />
            </div>
          </div>
        </div>
        {/* Level of Activity */}
        <h2>{t("Exercise Intensity")}</h2>
        <div className="activity-form">
          <div>
            <label htmlFor="inactive">{t("Sedentary or Inactive")}</label>
            <input
              type="radio"
              id="inactive"
              value="inactive"
              name="activity"
              onChange={(e) => setActivity(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="light_active">{t("Lightly Active")}</label>
            <input
              type="radio"
              id="light_active"
              value="light_active"
              name="activity"
              onChange={(e) => setActivity(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="moderately_active">{t("Moderately Active")}</label>
            <input
              type="radio"
              id="moderately_active"
              value="moderately_active"
              name="activity"
              onChange={(e) => setActivity(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="heavily_active">{t("Heavily Active")}</label>
            <input
              type="radio"
              id="heavily_active"
              value="heavily_active"
              name="activity"
              onChange={(e) => setActivity(e.target.value)}
            />
          </div>
        </div>
        <button type="submit" className="btn btn__submit">
          {t("Submit")}
        </button>
      </form>
      <LoaderPage />
    </>
  );
};

export default UserForm;
