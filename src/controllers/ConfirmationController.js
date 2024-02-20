import { ConfirmationModel } from "../models/ConfirmationMondel";


export class ConfirmationController {
    constructor() { }

    async ConfirmationUploadController(
        uid,
        dateTime,
        origin = "Novo Airão",
        destiny = "Manaus",
        price = "85"
    ) {
        const newConfirmation = new ConfirmationModel(uid, dateTime, origin, destiny, price);
        const isAddedHistoricSuccess = await newConfirmation.uploadTravel()

        console.log(isAddedHistoricSuccess + " confirmation controller")
        return isAddedHistoricSuccess;
    }
}