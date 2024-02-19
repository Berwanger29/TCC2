import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const TextTitleStyles = styled.Text`
    font-size: ${({ theme }) => theme.measures.fontTitle}px;
    font-family: ${props => props.theme.fonts.titleBold};
    color: ${props => props.theme.colors.white};
`

export const TextStyleH2 = styled.Text`
    font-size: ${({ theme }) => theme.measures.fontH2}px;
    font-family: ${({ theme }) => theme.fonts.titleBold};
    color:${({ theme }) => theme.colors.white};
`

export const TextStyleRegular = styled.Text`
    font-size: ${({ theme }) => theme.measures.fontRegular}px;
    font-family: ${({ theme }) => theme.fonts.regularRegular};
    color:${({ theme }) => theme.colors.white};
`

export const TextButtonStyles = styled.Text`
    font-size: ${RFValue(18)}px;
    color: ${props => props.theme.colors.white};
`

export const TextRegularLight = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: ${props => props.theme.fonts.regularLight};
    color: ${props => props.theme.colors.white};
`
