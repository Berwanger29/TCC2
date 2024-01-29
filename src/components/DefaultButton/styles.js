import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    width: 100%;
    height: 50px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background-color: ${({ theme, inverted }) => inverted ? 'transparent' : theme.colors.yellow};
    border: 1px solid ${({ theme, inverted }) => inverted ? theme.colors.yellow : 'transparent'};
`