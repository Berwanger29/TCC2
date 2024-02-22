import { CreateAccountUser } from "../models/CreateUserModel"

//se conecta com a View
export class CreateAccountWithEmailController {
    constructor(
        name,
        email,
        password
    ) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    async HandleNewEmailUser() {
        const newEmailUser = new CreateAccountUser(this.name, this.email, this.password)
        const { isLoginSuccessful, userData } = await newEmailUser.emailAndPassowrd()
        
        return { isLoginSuccessful, userData }
    }
}