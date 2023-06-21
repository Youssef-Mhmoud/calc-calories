import { useTranslation } from "react-i18next";
import "./UserForm.scss";
import { useContext, useState } from "react";
import { UserContext } from "../context/userData-context";
import { useNavigate } from "react-router-dom";
import { LoaderContext } from "../context/loader-context";

const UserForm = () => {
  const [t] = useTranslation();
  const [weight, setWeight] = useState();
  const [gender, setGender] = useState();
  const [activity, setActivity] = useState();

  const { setName, setBMR, setMinCalorie, setMaxCalorie } =
    useContext(UserContext);

  const { setLoader } = useContext(LoaderContext);

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    // Calculate The BMR for the Men
    switch (gender) {
      case "man":
        setBMR(() => +weight * 1 * 24);
        break;
      case "woman":
        setBMR(() => +weight * 0.9 * 24);
        break;
    }

    // For Men
    if (gender === "man" && activity === "inactive") {
      setMinCalorie(+weight * 1 * 24 * 0.25);
      setMaxCalorie(+weight * 1 * 24 * 0.4);
    }
    if (gender === "man" && activity === "light_active") {
      setMinCalorie(+weight * 1 * 24 * 0.5);
      setMaxCalorie(+weight * 1 * 24 * 0.7);
    }
    if (gender === "man" && activity === "moderately_active") {
      setMinCalorie(+weight * 1 * 24 * 0.65);
      setMaxCalorie(+weight * 1 * 24 * 0.8);
    }
    if (gender === "man" && activity === "heavily_active") {
      setMinCalorie(+weight * 1 * 24 * 0.9);
      setMaxCalorie(+weight * 1 * 24 * 1.2);
    }

    // For Woman
    if (gender === "woman" && activity === "inactive") {
      setMinCalorie(+weight * 0.9 * 24 * 0.25);
      setMaxCalorie(+weight * 0.9 * 24 * 0.35);
    }
    if (gender === "woman" && activity === "light_active") {
      setMinCalorie(+weight * 0.9 * 24 * 0.4);
      setMaxCalorie(+weight * 0.9 * 24 * 0.6);
    }
    if (gender === "woman" && activity === "moderately_active") {
      setMinCalorie(+weight * 0.9 * 24 * 0.5);
      setMaxCalorie(+weight * 0.9 * 24 * 0.7);
    }
    if (gender === "woman" && activity === "heavily_active") {
      setMinCalorie(+weight * 0.9 * 24 * 0.8);
      setMaxCalorie(+weight * 0.9 * 24 * 1);
    }

    setLoader(true);
    navigate("/user-data");
  };

  return (
    <>
      <h2 className="title">{t("title")}</h2>
      <form action="" className="form" onSubmit={submitHandler}>
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
          Submit
        </button>
      </form>
    </>
  );
};

export default UserForm;
