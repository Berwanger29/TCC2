import { useContext } from "react";
import { ButtonsWrapper, Container } from "./styles";

import { TextTitle } from "../../components/Texts";


import { UserContext } from "../../context/UserContext"
import { ProfileButtons } from "../../components/ProfileButtons";
import { GenericHeader } from "../../components/GenericHeader"

export function AccountScreen() {

    const { userDataContext } = useContext(UserContext)


    return (
        <Container>
            <GenericHeader
                text="Sobre"
                backButton
                style={{
                    marginBottom: 20
                }}
            />
            <ButtonsWrapper>
                <ProfileButtons
                    text={userDataContext.email}
                    disableButton
                />
            </ButtonsWrapper>
        </Container>
    )
}