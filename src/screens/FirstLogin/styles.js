import styled from "styled-components/native";
import styles from "../../global/styles/styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { RFPercentage } from "react-native-responsive-fontsize";


export const Container = styled(SafeAreaView)`
    flex   : 1;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    background-color: ${styles.colors.blue};
    padding: 0px 0px 20px 0px;
`
export const LogoContainer = styled.View`
    margin-bottom: 50px;
`

export const ArtContainer = styled.View`
    width: 90%;
    height: 50%;
    max-height: 300px;
`


