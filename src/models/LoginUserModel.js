import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../firebase"

export class LoginUser {
    constructor() { }

    async LoginUserWithEmailAndPassword(email, password) {

        let isLoginSuccessful;

        await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                // console.log(user.email)

                isLoginSuccessful = true
                return
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error(errorCode, errorMessage)
                isLoginSuccessful = false
                return
            });
        return isLoginSuccessful
    }

}