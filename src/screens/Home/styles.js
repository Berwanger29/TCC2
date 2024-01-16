import styled from "styled-components/native";
import styles from "../../global/styles/styles";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${styles.colors.blue};
`