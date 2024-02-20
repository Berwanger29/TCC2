import LottieView from 'lottie-react-native'
import {
    TextButton,
    TextTitle
} from "../../components/Texts";
import {
    AnimationContainer,
    Container,
    Wrapper,
} from "./styles";
import { DefaultButton } from '../../components/DefaultButton';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';



export function Confirmation() {

    const navigation = useNavigation();

    return (
        <Container>
            <Wrapper>
                <AnimationContainer>
                    <LottieView
                        autoPlay
                        loop={false}
                        source={require("../../assets/animations/confirmation.json")}
                    />
                </AnimationContainer>
                <TextTitle
                    text="Confirmado"
                />
            </Wrapper>

            <DefaultButton
                onPress={() => navigation.navigate("Home")}
                style={{
                    // position: "absolute",
                    // bottom: SafeAreaView
                }}
            >
                <TextButton
                    text="Voltar"
                />
            </DefaultButton>
        </Container >
    )
}