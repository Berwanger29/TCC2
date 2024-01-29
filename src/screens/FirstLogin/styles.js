import styled from "styled-components/native";
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";



const AnimatedLogoContainer = Animated.createAnimatedComponent(View)


export const Container = styled(SafeAreaView)`
    flex   : 1;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    padding: ${({ theme }) => theme.measures.paddingScreenVertical}px ${({ theme }) => theme.measures.paddingScreenHorizontal}px;
`


export const LogoContainer = styled(AnimatedLogoContainer)`
    height: 50px;
    width: 50px;
    background-color: ${props => props.theme.colors.yellow};
`


export const ArtContainer = styled.View`
    width: 90%;
    height: 50%;
    max-height: 300px;
`