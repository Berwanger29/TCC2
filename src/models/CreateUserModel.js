import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

export class CreateAccountUser {
    constructor(
        email = "",
        password = ""
    ) {
        this.email = email;
        this.passowrd = password;

    }
    async emailAndPassowrd() {
        await createUserWithEmailAndPassword(auth, "email@teste.com", "123123")
            .then((userCredentials) => {
                const user = userCredentials.user
                console.log(user)
            })
            .catch((err) => {
                console.error(err)
            })
    }

}