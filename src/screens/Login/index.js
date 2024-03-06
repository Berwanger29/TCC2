import { useContext } from "react";
import { Container, InputWrapper } from "./styles";

import { BackButton } from "../../components/BackButton";
import { TextButton, TextH2, TextTitle } from "../../components/Texts";
import { InputText } from "../../components/InputText";
import { useState } from "react";
import { DefaultButton } from "../../components/DefaultButton";

import { LoginUserController } from "../../controllers/LoginUserController";
import { UserContext, getUserDataDB } from "../../context/UserContext";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
import format from "pretty-format";

export function Login() {
  const navigation = useNavigation();

  const { setUserDataContext, setHasLogin } = useContext(UserContext);

  const [email, setEmail] = useState("email@teste.com");
  const [password, setPassword] = useState("123123");

  async function storeLoginUserData(value) {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("loginUserData", jsonValue);
    } catch (err) {
      console.error(err);
      return;
    }
  }

  async function loginEmailAndPassword() {
    const newLogin = new LoginUserController();
    const { isLoginSuccessful, userData } =
      await newLogin.HandleLoginUserEmailAndPassword(email, password);

    if (isLoginSuccessful) {
      setHasLogin(true);
      storeLoginUserData(userData);
      setUserDataContext(userData);
      getUserDataDB();
      Alert.alert("Sucesso", "Login efetuado com sucesso");
    } else {
      Alert.alert("Erro", "Alguma coisa deu errado");
    }
  }

  return (
    <Container>
      <BackButton />
      <TextTitle
        text="Entrar com e-mail"
        styles={{
          marginBottom: 30,
          alignSelf: "center",
        }}
      />

      <InputWrapper>
        <TextH2
          text="Digite seu e-mail"
          style={{
            marginBottom: 5,
          }}
        />
        <InputText
          onChangeText={(e) => {
            setEmail(e);
          }}
          value={email}
          placeholder="e-mail"
        />

        <TextH2
          text="Digite sua senha"
          style={{
            marginBottom: 5,
          }}
        />
        <InputText
          onChangeText={(e) => {
            setPassword(e);
          }}
          value={password}
          placeholder="senha"
          isPassword={true}
        />
      </InputWrapper>

      <DefaultButton onPress={() => loginEmailAndPassword()}>
        <TextButton text="Entrar" />
      </DefaultButton>
    </Container>
  );
}
