import {
    ButtonsWrapper,
    Container,
    DefaultButtonWrapper,
} from "./styles";

import {
    TextSmall,
    TextTitle
} from "../../components/Texts";

import { AntDesign } from '@expo/vector-icons';
import { RFValue } from "react-native-responsive-fontsize";
import { LoginButton } from "../../components/LoginButton";
import { EmailTextWrapper } from "../../components/LoginButton/styles";
import { InvisibleButton } from "../../components/InvisibleButton";

import theme from "../../globals/styles/theme";
import { Alert } from "react-native";

export function LoginOptions() {



    return (
        <Container>
            <TextTitle
                text={'Página de login'}
            />

            <ButtonsWrapper>
                <DefaultButtonWrapper>
                    <LoginButton
                        style={{ marginRight: 30 }}
                    >
                        <AntDesign name="apple1" size={RFValue(30)} color={theme.colors.white} />
                    </LoginButton>
                    <LoginButton>
                        <AntDesign name="google" size={RFValue(30)} color={theme.colors.white} />
                    </LoginButton>
                </DefaultButtonWrapper>

                <EmailTextWrapper>
                    <TextSmall
                        text={'Cadastre-se com e-mail '}
                    />
                    <InvisibleButton
                        style={{
                            borderBottom: 1,
                            borderBottomColor: theme.colors.white,
                            borderBottomWidth: 1
                        }}
                        onPress={() => {
                            Alert.alert("Alerta", "Mensagem qualquer")
                        }}
                    >
                        <TextSmall
                            text={'aqui'}
                        />
                    </InvisibleButton>
                </EmailTextWrapper>
            </ButtonsWrapper>
        </Container>
    )
}