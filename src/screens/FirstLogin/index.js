import {
    Container,
    ArtContainer,
    LogoContainer,
} from "./styles";
import { DefaultButton } from "../../components/DefaultButton";
import { TextButton, TextTitle } from "../../components/Texts";

import LottieView from 'lottie-react-native'

import { useNavigation } from "@react-navigation/native";


export function FirstLogin() {

    const navigation = useNavigation()

    return (
        <Container>
            <LogoContainer>
                <TextTitle
                    text={'LOGO'}
                />
            </LogoContainer>
            <ArtContainer>
                <LottieView
                    autoPlay
                    source={require('../../assets/animations/car_FirstLogin.json')}
                />
            </ArtContainer>
            <TextTitle
                text={"Bem vindo ao UniTransportes"}
                styles={{ marginTop: 50, paddingBottom: 100 }}
            />
            <DefaultButton
                onPress={() => navigation.navigate('Home')}
            >
                <TextButton
                    text={"Próximo"}
                />
            </DefaultButton>
        </Container>
    )
}