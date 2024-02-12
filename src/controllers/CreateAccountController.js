import { CreateAccountUser } from "../models/CreateUserModel"

//se conecta com a View
export class CreateAccountWithEmailController {
    constructor() { }

    HandleNewEmailUser() {
        const newEmailUser = new CreateAccountUser()
        newEmailUser.emailAndPassowrd()
    }
}