import { BackButtonContainer, Container } from "./styles";

import { TextTitle } from "../Texts";
import { BackButton } from "../BackButton"


export function GenericHeader({
    text,
    style,
    textStyles,
    backButton = false
}) {
    return (
        <Container
            style={style}
        >
            {
                backButton ?
                    (<BackButtonContainer>
                        <BackButton />
                    </BackButtonContainer>)
                    :
                    (<></>)
            }


            <TextTitle
                text={text}
                styles={textStyles}
            />
        </Container>
    )
}