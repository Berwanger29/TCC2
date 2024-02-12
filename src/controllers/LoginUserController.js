import { LoginUser } from "../models/LoginUserModel";

export class LoginUserController {
    constructor() { }

    async HandleLoginUserEmailAndPassword(email, password) {
        const loginEmailAndPassword = new LoginUser()
        const response = await loginEmailAndPassword.LoginUserWithEmailAndPassword(email, password)
        return response
    }
}