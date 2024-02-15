import { useContext } from "react";

import { Container } from "./styles";

import { TextSmall, TextTitle } from "../../components/Texts";
import { UserContext } from "../../context/UserContext";




export function Home() {

    const { userDataContext } = useContext(UserContext)

    return (
        <Container>
            <TextTitle
                text={'Home'}
            />
            <TextSmall
                text={userDataContext.email}
            />
        </Container>
    )
}