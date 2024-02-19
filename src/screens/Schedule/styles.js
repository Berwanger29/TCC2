import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
    flex: 1;
    padding: ${({ theme }) => theme.measures.paddingScreenVertical}px ${({ theme }) => theme.measures.paddingScreenHorizontal}px;
    background-color: ${({ theme }) => theme.colors.blue};
    justify-content: space-between;
`

export const InputsContainer = styled.View`
    flex: 1;
`

export const InputWrapper = styled.View`
    align-items: center;
`
export const InvisibleButton = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-bottom: 1px solid ${({theme})=> theme.colors.yellow};
`