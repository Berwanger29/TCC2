import LottieView from 'lottie-react-native'
import {
    TextButton,
    TextTitle
} from "../../components/Texts";
import {
    AnimationContainer,
    Container,
} from "./styles";
import { DefaultButton } from '../../components/DefaultButton';
import { useNavigation } from '@react-navigation/native';



export function Confirmation() {

    const navigation = useNavigation();

    return (
        <Container>

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

            <DefaultButton
                onPress={() => navigation.navigate("Home")}
                style={{
                    position: "absolute",
                    bottom: 20
                }}
            >
                <TextButton
                    text="Voltar"
                />
            </DefaultButton>
        </Container >
    )
}