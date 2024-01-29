import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

const logoValues = 60;

export const Container = styled(SafeAreaView)`
    flex: 1;
    align-items: center;
    justify-content: space-between;
    padding: ${({ theme }) => theme.measures.paddingScreenVertical}px ${({ theme }) => theme.measures.paddingScreenHorizontal}px;
`

export const LogoContainer = styled.View`
    width: ${logoValues}%;
    height: ${logoValues}%;
`

export const Logo = styled.Image.attrs({
    resizeMode: "cover"
})`
    width: 100%;
    height: 100%;
    
`

export const LoginShortButtonsWrapper = styled.View`
    width: 100%;
    flex-direction: row;
    margin-bottom: 40px;
    align-items: center;
    justify-content: center;
`

export const ButtonsWrapper = styled.View`
    align-items: center;
    width: 100%;
`