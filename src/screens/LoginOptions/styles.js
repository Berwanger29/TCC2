import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${(props) => props.theme.colors.blue};
    align-items: center;
    justify-content: space-between;
    padding: 25px 15px;
`

export const DefaultButtonWrapper = styled.View`
    width: 100%;
    flex-direction: row;
    margin-bottom: 40px;
`

export const ButtonsWrapper = styled.View`
    align-items: center;
`