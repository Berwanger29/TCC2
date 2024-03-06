import AsyncStorage from "@react-native-async-storage/async-storage";
import { doc, getDoc } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { db } from "../../firebase";

export const UserContext = createContext("");

export async function getLoginUserData() {
  try {
    const jsonValue = await AsyncStorage.getItem("loginUserData");
    let aux = JSON.parse(jsonValue);
    // setUserDataContext(aux);

    return aux;
  } catch (err) {
    console.error(err);
    return;
  }
}

export async function getUserDataDB() {
  let docSnap;

  const storedData = await getLoginUserData();

  if (storedData) {
    const docRef = doc(db, "passengers", storedData.uid);
    docSnap = await getDoc(docRef);
    return docSnap.data();
    // setHasLogin(true);

    // setUserDB(docSnap.data());
  } else {
    return {};
    // setHasLogin(false);
  }
}

export const UserProvider = ({ children }) => {
  const [userDataContext, setUserDataContext] = useState("");
  const [userDB, setUserDB] = useState("");
  const [hasLogin, setHasLogin] = useState(false);

  useEffect(() => {
    setUserDB(getUserDataDB());
    if (userDB) {
      setHasLogin(true);
    } else {
      setHasLogin(false);
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        userDataContext,
        setUserDataContext,
        hasLogin,
        setHasLogin,
        setUserDB,
        userDB,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
