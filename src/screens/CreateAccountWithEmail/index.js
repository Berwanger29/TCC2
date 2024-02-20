import { useContext, useState } from "react";
import { Alert } from "react-native";
import {
    Container,
    InputWrapper,
    KeyboardView,
} from "./styles";


import { DefaultButton } from "../../components/DefaultButton";
import { BackButton } from "../../components/BackButton";
import { InputText } from "../../components/InputText";
import {
    TextButton,
    TextH2,
    TextTitle
} from "../../components/Texts";

import { CreateAccountWithEmailController } from "../../controllers/CreateAccountController";
import { UserContext } from "../../context/UserContext";
import { useNavigation } from "@react-navigation/native";

export function CreateAccountWithEmail() {

    const { setUserDataContext } = useContext(UserContext)

    const navigation = useNavigation()

    const [name, setName] = useState('Vinicius');
    const [email, setEmail] = useState('email2@teste.com');
    const [verifyEmail, setVerifyEmail] = useState('email2@teste.com');
    const [password, setPassword] = useState('123123');
    const [verifyPassword, setVerifyPassowrd] = useState('123123');


    async function CreateUser() {
        if (email !== verifyEmail) {
            Alert.alert(
                "Erro",
                "Os e-mails não coincidem"
            )
            return
        }

        if (password !== verifyPassword) {
            Alert.alert(
                "Erro",
                "As senhas não coincidem"
            )
            return
        }

        if (name === "") {
            Alert.alert(
                "Erro",
                "Digite o seu nome"
            )
            return
        }

        const newUser = new CreateAccountWithEmailController(name, email, password)
        const { isLoginSuccessful, userData } = await newUser.HandleNewEmailUser()
        setUserDataContext(userData)

        isLoginSuccessful ? navigation.navigate("NavBottomTabs") : Alert.alert("Erro", "Alguma coisa deu errado")

    }

    return (
        <Container>
            <KeyboardView>
                <BackButton />
                <TextTitle
                    text={"Cadastrar-se"}
                    styles={{
                        marginBottom: 30,
                        alignSelf: "center"
                    }}
                />
                <InputWrapper>
                    <TextH2
                        text="Digite seu nome"
                        style={{
                            marginBottom: 5
                        }}
                    />
                    <InputText
                        onChangeText={(e) => { setEmail(e) }}
                        value={name}
                        placeholder={"nome"}
                    />

                    <TextH2
                        text="Digite seu e-mail"
                        style={{
                            marginBottom: 5
                        }}
                    />
                    <InputText
                        onChangeText={(e) => { setEmail(e) }}
                        value={email}
                        placeholder={"e-mail"}
                    />

                    <TextH2
                        text="Confirme seu e-mail"
                        style={{
                            marginBottom: 5
                        }}
                    />
                    <InputText
                        onChangeText={(e) => {
                            setVerifyEmail(e)
                            return e
                        }}
                        value={verifyEmail}
                        placeholder={"reescreva seu e-mail"}

                    />
                    <TextH2
                        text="Digite sua senha"
                    />
                    <InputText
                        onChangeText={(e) => {
                            setPassword(e)
                            return e
                        }}
                        value={password}
                        isPassword={true}
                        placeholder={"senha"}

                    />
                    <TextH2
                        text="Confirme sua senha"
                    />
                    <InputText
                        onChangeText={(e) => {
                            setVerifyPassowrd(e)
                            return e
                        }}
                        value={verifyPassword}
                        isPassword={true}
                        placeholder={"confirme sua senha"}
                    />

                </InputWrapper>
            </KeyboardView>
            <DefaultButton
                inverted={true}
                onPress={() => CreateUser()}
            >
                <TextButton
                    text={"Criar conta"}

                />
            </DefaultButton>
        </Container >
    )
}