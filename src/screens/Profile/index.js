import { useContext } from "react";
import { Container, WrapperButtons } from "./styles";

import { TextButton, TextTitle } from "../../components/Texts";
import { DefaultButton } from "../../components/DefaultButton";

import { UserContext } from "../../context/UserContext";

import { auth, db } from "../../../firebase";
import { signOut } from "firebase/auth";
import { deleteDoc, doc } from "firebase/firestore";
import { ProfileButtons } from "../../components/ProfileButtons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function Profile() {
  const { userDataContext, setHasLogin } = useContext(UserContext);

  const navigation = useNavigation();

  async function removeKey() {
    try {
      await AsyncStorage.removeItem("loginUserData");
      return true;
    } catch (e) {
      return;
    }
  }

  async function deleteAll() {
    const user = auth.currentUser;

    deleteUser(user)
      .then(() => {
        console.log("Auth - usuário deletado");
      })
      .catch((e) => {
        console.error(e);
      });
    const credential = auth.EmailAuthProvider.credential(
      "email@teste.com",
      "123123"
    );
    await reauthenticateWithCredential(user, credential)
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });

    await deleteDoc(doc(db, "passengers", userDataContext.uid));
  }

  return (
    <Container>
      <TextTitle
        text={"Perfil"}
        styles={{
          marginBottom: 20,
        }}
      />

      <WrapperButtons>
        <ProfileButtons
          text="Conta"
          iconName="account"
          onPress={() => navigation.navigate("AccountScreen")}
        />
        <ProfileButtons
          text="Política de privacidade"
          iconName="file-document-edit-outline"
          onPress={() => navigation.navigate("Privacy")}
        />
        <ProfileButtons
          text="Sobre"
          iconName="information-variant"
          onPress={() => navigation.navigate("About")}
        />
      </WrapperButtons>

      <DefaultButton
        onPress={() =>
          signOut(auth)
            .then(async () => {
              const removed = await removeKey();
              if (removed) setHasLogin(false);
            })
            .catch((error) => {
              return;
            })
        }
      >
        <TextButton text="Sair" />
      </DefaultButton>
    </Container>
  );
}
