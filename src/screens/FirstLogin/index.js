import {
    Container,
    ArtContainer,
    LogoContainer,
} from "./styles";

import LottieView from 'lottie-react-native'

import { DefaultButton } from "../../components/DefaultButton";
import { TextButton, TextTitle } from "../../components/Texts";

import { useNavigation } from "@react-navigation/native";
import { useSharedValue, withDelay, withTiming } from 'react-native-reanimated';
import { useEffect } from "react";


export function FirstLogin() {

    const navigation = useNavigation()

    const logoWidth = useSharedValue(100);
    const opacityLogo = useSharedValue(0)

    const handlePress = () => { }

    function logoAnimation() {
        opacityLogo.value = 1
    }

    // useEffect(() => {
    //     logoAnimation()
    // }, [])

    return (
        <Container>
            <LogoContainer
                style={{
                    width: logoWidth,
                    opacity: opacityLogo
                }}
            />
            <ArtContainer>
                <LottieView
                    autoPlay
                    source={require('../../assets/animations/car_FirstLogin.json')}
                />
            </ArtContainer>
            <TextTitle
                text={`Bem vindo ao ${'\n'} UniTransportes`}
                styles={{ marginTop: 50, paddingBottom: 100, textAlign: 'center' }}
            />
            <DefaultButton
                onPress={() => navigation.navigate('LoginOptions')}
            >
                <TextButton
                    text={"Próximo"}
                />
            </DefaultButton>
        </Container>
    )
}