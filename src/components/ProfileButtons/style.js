import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    width: 100%;
    padding: 15px 5px;
    justify-content: center;
    flex-direction: column;
    justify-content: space-between;
    border-bottom: 10px solid ${({ theme }) => theme.colors.tabBarIconColor};
`

export const WrapperIconAndText = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
`

export const IconCircle = styled.View`
    margin-right: 10px;
    border: 2px solid white;
    height: 40px;
    width: 40px;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
`

export const BorderBottom = styled.View`
    width: 100%;
    height: .5px;
    background-color: ${({ theme }) => theme.colors.tabBarIconColor};
`