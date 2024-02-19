import { useContext } from "react";

import { Container } from "./styles";

import {
    TextButton,
    TextSmall,
    TextTitle
} from "../../components/Texts";
import {
    DefaultButton
} from "../../components/DefaultButton";




export function Schedule() {

    return (
        <Container>
            <TextTitle
                text={'Agendar'}
            />

            <DefaultButton
                inverted={true}
            >
                <TextButton
                    text="Agendar"
                />
            </DefaultButton>
        </Container>
    )
}