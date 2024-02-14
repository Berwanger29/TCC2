import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../firebase"

export class LoginUser {
    constructor() { }

    async LoginUserWithEmailAndPassword(email, password) {

        let isLoginSuccessful;
        let userData;

        await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;

                isLoginSuccessful = true
                userData = user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error(errorCode, errorMessage)
                isLoginSuccessful = false
                return
            });
        return {
            isLoginSuccessful,
            userData
        }
    }
}