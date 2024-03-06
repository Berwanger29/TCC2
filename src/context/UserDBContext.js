import { createContext, useState } from "react";

export const UserDBContext = createContext("");

export const UserDBProvider = ({children}) => {
  const [userDBContext, setUserDBContext] = useState("");

  useEffect(() => {
    setUserDBContext(); // firebase ou async storage
  }, []);

  return (
    <UserDBContext.Provider value={{ UserDBContext, setUserDBContext }}>
      {children}
    </UserDBContext.Provider>
  );
};
