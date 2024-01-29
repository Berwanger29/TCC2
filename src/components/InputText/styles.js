import styled from "styled-components/native";
import { Entypo } from '@expo/vector-icons';

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border: 1px solid ${({ theme }) => theme.colors.black};
    border-radius: ${({ theme }) => theme.measures.border}px;
    background-color: ${({ theme }) => theme.colors.white};
    height: ${({ theme }) => theme.measures.textInput}px;
`

export const Input = styled.TextInput`
    flex:${({ isPassword }) => isPassword ? .98 : 1};
    font-size: ${({ theme }) => theme.measures.fontTextInput}px;
    padding: 5px 0 5px 5px;
`

export const TogglePasswordButton = styled.TouchableOpacity`
    padding: 0 5px;
    border-left-color: black;
    border-left-width: 1px;
    border-left-style: solid;
    
`

export const EyeIcon = styled(Entypo).attrs({
    size: 30,
    color: ({ theme }) => theme.colors.black
})``