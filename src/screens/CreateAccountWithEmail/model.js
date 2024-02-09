import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";

export class UserEmail {
    constructor(
        email,
        password,
    ) {
        this.email = email;
        this.password = password;
    }

    async handleCreateAccountWithEmailAndPassword() {


        // try {

        await createUserWithEmailAndPassword(auth, this.email, this.password)
            .then((userCredential) => {
                console.log("--Dentro do model--")
                console.log(userCredential.user.email)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            })
        // } catch(e){
        //     console.error(e)
        // }



    }
}