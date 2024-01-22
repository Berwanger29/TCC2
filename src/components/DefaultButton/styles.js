import styled from "styled-components/native";


export const Container = styled.TouchableOpacity`
    /* width: 90%; */
    width: 100%;
    height: 50px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background-color: ${props => props.theme.colors.yellow};
`