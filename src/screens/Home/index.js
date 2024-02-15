import { useContext, useEffect, useRef, useState } from "react";

import { Container } from "./styles";

import { TextSmall, TextTitle } from "../../components/Texts";
import { UserContext } from "../../context/UserContext";

import { format as pretty } from "pretty-format";
import { DefaultButton } from "../../components/DefaultButton";




export function Home() {

    const { userDataContext, setUserDataContext } = useContext(UserContext)

    return (
        <Container>
            <TextTitle
                text={'Home'}
            />
            <TextSmall
                text={userDataContext.email  ? userDataContext.email : ""}
            />

    
        </Container>
    )
}