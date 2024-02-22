import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";

export class CreateAccountUser {
    constructor(
        name,
        email,
        password
    ) {
        this.name = name
        this.email = email;
        this.passowrd = password;
    }

    async emailAndPassowrd() {

        let isLoginSuccessful;
        let userData;

        await createUserWithEmailAndPassword(auth, this.email, this.passowrd)
            .then((userCredentials) => {
                userData = userCredentials.user
                isLoginSuccessful = true;

                this.newDocDB(userData.uid)
                return
            })
            .catch((err) => {
                console.error(err)
            })

        return {
            isLoginSuccessful,
            userData
        }
    }

    async newDocDB(userUID) {
        try {
            await setDoc(doc(db, "passengers", userUID), {
                uid: userUID,
                name: this.name,
                email: this.email
            })

            // await addDoc(collection(doc(db, "passengers", userUID), "historic"), )
            return
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

}