import {
    ButtonsWrapper,
    Container,
    LoginShortButtonsWrapper,
    Logo,
    LogoContainer,
} from "./styles";

import {
    TextButton,
    TextSmall,
} from "../../components/Texts";

import { AntDesign } from '@expo/vector-icons';
import { RFValue } from "react-native-responsive-fontsize";
import { LoginButton } from "../../components/LoginButton";
import { EmailTextWrapper } from "../../components/LoginButton/styles";
import { InvisibleButton } from "../../components/InvisibleButton";
import { DefaultButton } from "../../components/DefaultButton"

import theme from "../../globals/styles/theme";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function LoginOptions() {

    const navigation = useNavigation();

    return (
        <Container>
            <LogoContainer>
                <Logo
                    source={require('../../assets/images/UniTransportes.png')}
                />
            </LogoContainer>

            <ButtonsWrapper>

                <DefaultButton
                    style={{ marginBottom: 10 }}
                    onPress={() => navigation.navigate('Home')}
                >
                    <TextButton
                        text={'Entrar'}
                    />
                </DefaultButton>

                <DefaultButton
                    inverted={true}
                    onPress={()=> navigation.navigate('CreateAccountWithEmail')}
                >
                    <TextButton
                        text={'Cadastrar-se'}
                    />
                </DefaultButton>



            </ButtonsWrapper>



            <ButtonsWrapper
                style={{
                    marginTop: 30
                }}
            >
                <LoginShortButtonsWrapper>
                    {/* <LoginButton
                        style={{ marginRight: 30 }}
                    >
                        <AntDesign name="apple1" size={RFValue(30)} color={theme.colors.white} />
                    </LoginButton> */}
                    <LoginButton>
                        <AntDesign name="google" size={RFValue(30)} color={theme.colors.white} />
                    </LoginButton>
                </LoginShortButtonsWrapper>

                <EmailTextWrapper>
                    <TextSmall
                        text={'Cadastre-se com e-mail '}
                    />
                    <InvisibleButton
                        style={{
                            borderBottom: 1,
                            borderBottomColor: theme.colors.yellow,
                            borderBottomWidth: 1
                        }}
                        onPress={() => {
                            Alert.alert("Alerta", "Mensagem qualquer")
                        }}
                    >
                        <TextSmall
                            text={'aqui'}
                            style={{
                                color: theme.colors.yellow
                            }}
                        />
                    </InvisibleButton>
                </EmailTextWrapper>
            </ButtonsWrapper>
        </Container>
    )
}