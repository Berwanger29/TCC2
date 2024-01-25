import styled from "styled-components/native";

export const Container = styled.TextInput`
    width: 100%;
    height: ${({ theme }) => theme.measures.textInput}px;
    border-radius: ${({ theme }) => theme.measures.border}px;
    border: 1px solid ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.white};
    font-size: ${({theme}) => theme.measures.fontTextInput}px;
    padding: 5px;
`