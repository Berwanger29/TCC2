import styled from "styled-components/native";
import { Ionicons } from '@expo/vector-icons';


export const Container = styled.TouchableOpacity`
    height: ${({ theme }) => theme.measures.backButtonsDimensions}px;
    width: ${({ theme }) => theme.measures.backButtonsDimensions}px;
`


export const Icon = styled(Ionicons).attrs((props) => ({
    name: "return-up-back-outline",
    size: props.theme.measures.backButtonsDimensions,
    color: props.theme.colors.yellow
}))``