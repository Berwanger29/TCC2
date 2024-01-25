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

function handleTextInput(e) {
    console.log(e)
}


export function CreateAccountWithEmail() {
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
                        onChangeText={'ola'}
                        
                        placeholder={"e-mail"}
                        style={{
                            marginBottom: 15
                        }}
                    />

                    <TextH2
                        text="Confirme seu e-mail"
                        style={{
                            marginBottom: 5
                        }}
                    />
                    <InputText
                        onChangeText={'ola'}
                        placeholder={"reescreva seu e-mail"}
                        style={{
                            marginBottom: 15
                        }}
                    />
                    <TextH2
                        text="Digite sua senha"
                        style={{
                            marginBottom: 5
                        }}
                    />
                    <InputText
                        onChangeText={'ola'}
                        placeholder={"senha"}
                        style={{
                            marginBottom: 15
                        }}
                    />
                    <TextH2
                        text="Confirme sua senha"
                        style={{
                            marginBottom: 5
                        }}
                    />
                    <InputText
                        onChangeText={'ola'}
                        placeholder={"confirme sua senha"}
                        style={{
                            marginBottom: 15
                        }}
                    />

                </InputWrapper>
            </KeyboardView>
            <DefaultButton
                inverted={true}
                onPress={() => { }}
            >
                <TextButton
                    text={"Criar conta"}

                />
            </DefaultButton>
        </Container >
    )
}