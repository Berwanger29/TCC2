import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import styled from "styled-components/native";



export const Container = styled.View`
    flex: 1;
    padding: ${() => {
        const insets = useSafeAreaInsets()

        return insets.top
    }}px ${({ theme }) => theme.measures.paddingScreenHorizontal}px 0px ${({ theme }) => theme.measures.paddingScreenHorizontal}px;
    background-color: ${({ theme }) => theme.colors.blue};
`

export const List = styled.FlatList`
    flex: 1;
`