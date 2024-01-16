import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import styles from "../../global/styles/styles";

export const TextTitleStyles = styled.Text`
    font-size: ${RFValue(28)}px;
    font-weight: bold;
    color: ${styles.colors.white} ;
    
`

export const TextButtonStyles = styled.Text`
    font-size: ${RFValue(18)}px;
    font-weight: bold;
    color: ${styles.colors.white};
`