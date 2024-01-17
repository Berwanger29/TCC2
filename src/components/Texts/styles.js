import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const TextTitleStyles = styled.Text`
    font-size: ${RFValue(28)}px;
    font-family: 'Oswald_700Bold';
    color: ${props => props.theme.colors.white};
`

export const TextButtonStyles = styled.Text`
    font-size: ${RFValue(18)}px;
    color: ${props => props.theme.colors.white};
`