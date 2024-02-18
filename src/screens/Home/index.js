import {
    useContext,
    useEffect,
    useState,
} from "react";
import { ActivityIndicator } from 'react-native'

import { Container } from "./styles";

import { TextSmall, TextTitle } from "../../components/Texts";
import { UserContext } from "../../context/UserContext";

import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import { LoadingScreen } from "../../components/LoadingScreen.js";


export function Home() {

    const { userDataContext } = useContext(UserContext)

    const [userName, setUserName] = useState("")

    async function getUserDataDB() {
        const docRef = doc(db, "passengers", userDataContext.uid)
        const docSnap = await getDoc(docRef)

        console.log(docSnap.data())
        setUserName(docSnap.data().name)
    }

    useEffect(() => {
        getUserDataDB()
    }, [])

    if (userName === "") {
        return (
            <Container>
                <LoadingScreen />
            </Container>
        )
    }

    return (
        <Container>
            <TextTitle
                text={'Home'}
            />
            <TextSmall
                text={userName ? userName : "nada ainda"}
            />
        </Container>
    )
}