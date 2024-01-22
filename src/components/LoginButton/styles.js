import styled from "styled-components/native";

const dimensions = 60;

export const Container = styled.TouchableOpacity`
    width: ${dimensions}px;
    height: ${dimensions}px;
    border-radius: ${dimensions / 2}px;
    border: 1px solid ${props => props.theme.colors.yellow};
    align-items: center;
    justify-content: center;
`

export const EmailTextWrapper = styled.View`
    flex-direction: row;
`