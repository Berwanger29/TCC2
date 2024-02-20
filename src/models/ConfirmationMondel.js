import { arrayUnion, doc, setDoc, updateDoc } from "firebase/firestore"
import { db } from "../../firebase"
import format from "pretty-format"

export class ConfirmationModel {
    constructor(
        uid,
        dateTime,
        origin = "Novo Airão",
        destiny = "Manaus",
        price = "85",
        passengers = "2"
    ) {
        this.uid = uid
        this.dateTime = dateTime
        this.origin = origin
        this.destiny = destiny
        this.price = price
        this.passengers = passengers
    }

    async uploadTravel() {

        let isAddedHistoricSuccess = true;

        const docRef = doc(db, 'passengers', this.uid)
        const newDataHistoric = {
            dateTime: this.dateTime,
            origin: this.origin,
            destiny: this.destiny,
            price: this.price,
            passengers: this.passengers
        }

        try {
            await updateDoc(docRef, {
                historic: arrayUnion(newDataHistoric)
            })

            return isAddedHistoricSuccess;

        } catch (e) {
            isAddedHistoricSuccess = false
            console.error(e)
        }

        return isAddedHistoricSuccess;
    }

}