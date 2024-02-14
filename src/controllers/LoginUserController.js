import { LoginUser } from "../models/LoginUserModel";



export class LoginUserController {
    constructor() { }

    async HandleLoginUserEmailAndPassword(email, password) {
        const loginEmailAndPassword = new LoginUser()
        const { isLoginSuccessful, userData } = await loginEmailAndPassword.LoginUserWithEmailAndPassword(email, password)
        
        return { isLoginSuccessful, userData }
    }
}