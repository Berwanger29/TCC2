import styled from "styled-components/native";
import styles from "../../globals/styles/theme";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${props => props.theme.colors.blue};
`