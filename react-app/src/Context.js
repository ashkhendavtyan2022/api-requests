import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [profile, setProfile] = useState({
    firstName: "-",
    lastName: "-",
    age: "",
    gender: "",
    position: "No Position",
    email: "",
    phone: "",
    birthday: "",
    profileIMG: null,
  })

  return (
    <AppContext.Provider
      value={{
        profile, setProfile,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
