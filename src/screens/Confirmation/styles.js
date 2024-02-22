import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
    flex: 1;
    padding: ${({ theme }) => theme.measures.paddingScreenVertical}px ${({ theme }) => theme.measures.paddingScreenHorizontal}px;
    background-color: ${({ theme }) => theme.colors.blue};
`
export const AnimationContainer = styled.View`
    width: 100%;
    height: 50%;
`

export const Wrapper = styled.View`
    flex: 1;
    width: 100%;
    justify-content: center;
    align-items: center;
`