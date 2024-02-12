import {
    Container,
    InputWrapper
} from "./styles"

import { LoginUserController } from "../../controllers/LoginUserController"

import { BackButton } from "../../components/BackButton"
import { TextButton, TextH2, TextTitle } from "../../components/Texts"
import { InputText } from "../../components/InputText"
import { useState } from "react"
import { DefaultButton } from "../../components/DefaultButton"

import { useNavigation } from "@react-navigation/native"
import { Alert } from "react-native"

export function Login() {

    const navigation = useNavigation()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function loginEmailAndPassword() {
        const newLogin = new LoginUserController()
        const response = await newLogin.HandleLoginUserEmailAndPassword(email, password)

        response ? navigation.navigate("Home") : Alert.alert("Azedou", "Alguma coisa de errada não está certa")
    }

    return (
        <Container>
            <BackButton />
            <TextTitle
                text="Entrar com e-mail"
                styles={{
                    marginBottom: 30,
                    alignSelf: "center"
                }}
            />

            <InputWrapper>
                <TextH2
                    text="Digite seu e-mail"
                    style={{
                        marginBottom: 5
                    }}
                />
                <InputText
                    onChangeText={(e) => { setEmail(e) }}
                    value={email}
                    placeholder="e-mail"
                />

                <TextH2
                    text="Digite sua senha"
                    style={{
                        marginBottom: 5
                    }}
                />
                <InputText
                    onChangeText={(e) => { setPassword(e) }}
                    value={password}
                    placeholder="senha"
                    isPassword={true}
                />
            </InputWrapper>

            <DefaultButton
                onPress={() => loginEmailAndPassword()}
            >
                <TextButton
                    text="Entrar"
                />
            </DefaultButton>
        </Container>
    )
}