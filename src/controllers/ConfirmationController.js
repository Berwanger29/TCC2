import { ConfirmationModel } from "../models/ConfirmationMondel";

export class ConfirmationController {
  constructor() {}

  async ConfirmationUploadController(
    uid,
    dateTime,
    origin,
    destiny,
    passengers,
    price
  ) {
    const newConfirmation = new ConfirmationModel(
      uid,
      dateTime,
      origin,
      destiny,
      price,
      passengers
    );
    const isAddedHistoricSuccess = await newConfirmation.uploadTravel();

    return isAddedHistoricSuccess;
  }
}
