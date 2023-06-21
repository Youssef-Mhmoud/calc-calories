import { createContext, useState } from "react";

export const LoaderContext = createContext();

const LoaderContextProvider = (props) => {
  const [loader, setLoader] = useState(false);

  return (
    <LoaderContext.Provider value={{ loader, setLoader }}>
      {/* eslint-disable-next-line react/prop-types */}
      {props.children}
    </LoaderContext.Provider>
  );
};

export default LoaderContextProvider;
