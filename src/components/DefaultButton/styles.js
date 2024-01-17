import styled from "styled-components/native";


export const Container = styled.TouchableOpacity`
    width: 90%;
    height: 50px;
    background-color: ${props => props.theme.colors.yellow};
    align-items: center;
    justify-content: center;
    border-radius: 10px;
`