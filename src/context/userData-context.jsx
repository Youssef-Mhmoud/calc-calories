import { createContext, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [name, setName] = useState();
  const [bmr, setBMR] = useState();
  const [minCalorie, setMinCalorie] = useState();
  const [maxCalorie, setMaxCalorie] = useState();

  return (
    <UserContext.Provider
      value={{
        name,
        setName,
        bmr,
        setBMR,
        minCalorie,
        setMinCalorie,
        maxCalorie,
        setMaxCalorie,
      }}
    >
      {/* eslint-disable-next-line react/prop-types */}
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
