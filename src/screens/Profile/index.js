import { useContext } from "react";

import { Container } from "./styles";

import { TextSmall, TextTitle } from "../../components/Texts";

import { UserContext } from "../../context/UserContext";


export function Profile() {

    const { userDataContext } = useContext(UserContext)

    return (
        <Container>
            <TextTitle
                text={'Profile'}
            />
            <TextSmall
                text={userDataContext.email}
            />
        </Container>
    )
}