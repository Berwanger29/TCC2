import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAvoidingView, Platform } from "react-native";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"

export const Container = styled(SafeAreaView)`
    flex: 1;
    padding: ${({ theme }) => theme.measures.paddingScreenVertical}px ${({ theme }) => theme.measures.paddingScreenHorizontal}px;
    justify-content: flex-end;
`

export const KeyboardView = styled(KeyboardAwareScrollView).attrs({
    showsVerticalScrollIndicator: false,
    bounces: false,
})`
    margin-bottom: 30px;
`


export const InputWrapper = styled.View`
    flex: 1;

`