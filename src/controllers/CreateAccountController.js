import { UserEmail } from "../screens/CreateAccountWithEmail/model";


//se conecta com a View
export class CreateAccountWithEmailController {
    constructor() {}

    HandleNewEmailUser() {
        const newEmailUser = new UserEmail()
        newEmailUser.handleCreateAccountWithEmailAndPassword("email@teste.com", "123123")
    }

}