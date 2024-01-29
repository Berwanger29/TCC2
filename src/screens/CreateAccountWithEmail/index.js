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
import { useState } from "react";
import { Alert } from "react-native";

function handleTextInput(e) {
    console.log(e)
}


export function CreateAccountWithEmail() {

    const [email, setEmail] = useState('');
    const [verifyEmail, setVerifyEmail] = useState('');
    const [passowrd, setPassword] = useState('');
    const [verifyPassword, setVerifyPassowrd] = useState('');

    function Login() {
        if (email !== verifyEmail) {
            Alert.alert(
                "Erro",
                "Os e-mails não coincidem"
            )
            return
        }

        if (passowrd !== verifyPassword) {
            Alert.alert(
                "Erro",
                "As senhas não coincidem"
            )

            return
        }

        
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
                        isPassword={true}
                        placeholder={"confirme sua senha"}
                    />

                </InputWrapper>
            </KeyboardView>
            <DefaultButton
                inverted={true}
                onPress={() => Login()}
            >
                <TextButton
                    text={"Criar conta"}

                />
            </DefaultButton>
        </Container >
    )
}