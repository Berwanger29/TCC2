import { useContext } from "react";
import { Container } from "./styles";

import { TextButton, TextTitle } from "../../components/Texts";
import { DefaultButton } from "../../components/DefaultButton";

import { UserContext } from "../../context/UserContext"

import { auth, db } from "../../../firebase";
import { deleteUser } from "firebase/auth";
import { deleteDoc, doc } from "firebase/firestore";


export function Profile() {

    const { userDataContext } = useContext(UserContext)

    async function deleteAll() {
        const user = auth.currentUser;

        deleteUser(user)
            .then(() => {
                console.log("Auth - usuário deletado")
            })
            .catch((e) => {
                console.error(e)
            })
        const credential = auth.EmailAuthProvider.credential(
            "email@teste.com",
            "123123"
        )
        await reauthenticateWithCredential(user, credential).then(() => {

        }).catch((error) => {
            console.error(error)
        });

        await deleteDoc(doc(db, "passengers", userDataContext.uid));
    }

    return (
        <Container>
            <TextTitle
                text={'Profile'}
            />

            {/* <DefaultButton
                onPress={() => deleteAll()}
            >
                <TextButton
                    text="Deletar conta"
                />
            </DefaultButton> */}

        </Container>
    )
}