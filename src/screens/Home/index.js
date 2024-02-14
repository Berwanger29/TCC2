import { useContext } from "react";

import { Container } from "./styles";

import { TextSmall, TextTitle } from "../../components/Texts";
import { UserContext } from "../../../App";




export function Home() {

    const { userDataContext, setUserDataContext } = useContext(UserContext)

    return (
        <Container>
            <TextTitle
                text={'Home'}
            />
            <TextSmall
                text={userDataContext.email.length > 0 ? userDataContext.email : "nada ainda"}
            />
        </Container>
    )
}