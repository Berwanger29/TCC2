import { useContext } from "react";

import { Container } from "./styles";

import { TextSmall, TextTitle } from "../../components/Texts";
import { UserContext } from "../../context/UserContext";






export function Historic() {

    const { userDataContext } = useContext(UserContext)

    return (
        <Container>
            <TextTitle
                text={'Historic'}
            />
            <TextSmall
                text={userDataContext.email}
            />
        </Container>
    )
}