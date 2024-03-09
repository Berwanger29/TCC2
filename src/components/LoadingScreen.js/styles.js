import { ActivityIndicator } from "react-native";
import styled from "styled-components/native";
import theme from "../../globals/styles/theme";

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme})=>theme.colors.blue};
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
`

export const Loader = styled(ActivityIndicator)
    .attrs({
        size: "large",
        color: theme.colors.yellow
    })``