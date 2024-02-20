import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
    flex: 1;
    padding: ${({ theme }) => theme.measures.paddingScreenVertical}px ${({ theme }) => theme.measures.paddingScreenHorizontal}px;
    background-color: ${({ theme }) => theme.colors.blue};
    align-items: center;
    justify-content: center;
`