import { arrayUnion, doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";

import * as Crypto from "expo-crypto";

export class ConfirmationModel {
  constructor(
    uid = "",
    dateTime = "",
    origin = "",
    destiny = "",
    price = "",
    passengers = "",
    status = "agendado",
    scheduledId = Crypto.randomUUID()
  ) {
    this.uid = uid;
    this.dateTime = dateTime;
    this.origin = origin;
    this.destiny = destiny;
    this.price = price;
    this.passengers = passengers;
    this.status = status;
    this.scheduledId = scheduledId;
  }

  async uploadTravel() {
    // const scheduleId

    let isAddedHistoricSuccess = true;

    const docRef = doc(db, "passengers", this.uid);
    const newDataHistoric = {
      dateTime: this.dateTime,
      origin: this.origin,
      destiny: this.destiny,
      price: this.price,
      passengers: this.passengers,
      status: this.status,
      scheduledId: this.scheduledId,
    };

    try {
      await updateDoc(docRef, {
        historic: arrayUnion(newDataHistoric),
      });

      return isAddedHistoricSuccess;
    } catch (e) {
      if (e) {
        isAddedHistoricSuccess = false;
      }
      console.error(e);
    }

    return isAddedHistoricSuccess;
  }
}
