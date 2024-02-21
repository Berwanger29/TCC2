import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
    flex: 1;
    justify-content: space-between;
    padding: ${({ theme }) => theme.measures.paddingScreenVertical}px ${({ theme }) => theme.measures.paddingScreenHorizontal}px;
    background-color: ${({ theme }) => theme.colors.blue};
`

export const Header = styled.View`
    width: 100%;
`

export const TripButton = styled.TouchableOpacity`
    width: 100%;
    height: 100px;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.yellow};
    border: 1px solid ${({ theme }) => theme.colors.yellow};
    border-radius: ${({ theme }) => theme.measures.border}px;
`


