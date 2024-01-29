import {
    Container, Icon,
} from "./styles";



import { useNavigation } from "@react-navigation/native";





export function BackButton() {

    const navigation = useNavigation();

    return (
        <Container
            onPress={() => navigation.goBack()}
        >
            <Icon />
        </Container>
    )
}