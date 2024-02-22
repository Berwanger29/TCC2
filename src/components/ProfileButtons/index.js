import { Textregular } from "../Texts";
import {
    BorderBottom,
    Container,
    IconCircle,
    WrapperIconAndText
} from "./style";

import { MaterialCommunityIcons } from '@expo/vector-icons';

import theme from "../../globals/styles/theme"



export function ProfileButtons({
    text,
    onPress,
    iconName = "",
    disableButton = false
}) {
    return (
        <Container
            onPress={onPress}
            activeOpacity={disableButton}
        >
            <WrapperIconAndText>


                {
                    iconName === "" ?
                        (
                            <></>
                        )
                        :
                        (
                            <IconCircle>
                                <MaterialCommunityIcons name={iconName} size={24} color="white" />
                            </IconCircle>
                        )
                }


                <Textregular
                    text={text}
                />
            </WrapperIconAndText>
            <BorderBottom />
        </Container>
    )
}