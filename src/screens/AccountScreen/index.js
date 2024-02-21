import { useContext } from "react";
import { ButtonsWrapper, Container } from "./styles";

import { TextTitle } from "../../components/Texts";


import { UserContext } from "../../context/UserContext"
import { ProfileButtons } from "../../components/ProfileButtons";

export function AccountScreen() {

    const { userDataContext } = useContext(UserContext)


    return (
        <Container>
            <TextTitle
                text={'Sua conta'}
            />

            <ButtonsWrapper>
                <ProfileButtons
                    text="texto qualquer"
                    iconName="account"
                />
            </ButtonsWrapper>
        </Container>
    )
}