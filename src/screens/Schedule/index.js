import { useContext, useEffect, useState } from "react";

import {
    Container,
    InputWrapper,
    InputsContainer,
    InvisibleButton
} from "./styles";

import {
    TextButton,
    TextH2,
    TextSmall,
    TextTitle,
    Textregular
} from "../../components/Texts";
import {
    DefaultButton
} from "../../components/DefaultButton";
import { GenericHeader } from "../../components/GenericHeader";

import DateTimePickerModal from 'react-native-modal-datetime-picker';

import theme from "../../globals/styles/theme"
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
import format from "pretty-format";
import { ConfirmationController } from "../../controllers/ConfirmationController";
import { UserContext } from "../../context/UserContext";





export function Schedule() {

    const { userDataContext } = useContext(UserContext)
    const navigation = useNavigation()

    // const [yesterday, setYesterday] = useState(new Date())

    const [selectedDate, setSelectedDate] = useState(new Date());
    const [datePickerVisible, setDatePickerVisible] = useState(false);

    const [selectedTime, setSelectedTime] = useState(new Date());
    const [timePickerVisible, setTimePickerVisible] = useState(false);

    // function YesterdayDate() {
    //     const today = new Date();
    //     const yesterday = new Date(today);
    //     yesterday.setDate(yesterday.getDate() - 1);
    //     // return yesterday.toISOString().split('T')[0];
    //     setYesterday(yesterday.toISOString().split('T')[0])
    // }

    function showDatePicker() {
        setDatePickerVisible(true);
    };
    function hideDatePicker() {
        setDatePickerVisible(false);
    };
    function handleDateConfirm(date) {
        setSelectedDate(date);
        hideDatePicker();
    };

    function showTimePicker() {
        setTimePickerVisible(true);
    };
    function hideTimePicker() {
        setTimePickerVisible(false);
    };
    function handleTimeConfirm(time) {
        setSelectedTime(time);
        hideTimePicker();
    };

    async function confirm(formatedDate) {

        const newSchedule = new ConfirmationController()
        const { isAddedHistoricSuccess } = newSchedule.ConfirmationUploadController(userDataContext.uid, formatedDate);

        console.log(isAddedHistoricSuccess)
    }

    function handleConfirmation() {

        let formatedDate = `${selectedDate.getFullYear()}Y ${selectedDate.getMonth()}M ${selectedDate.getDate()}D ${selectedTime.getHours()}H ${selectedTime.getMinutes()}Min`
        // let formatedDate = new Date();
        // let formatedDate = `${selectedDate.getFullYear()}-${selectedDate.getMonth()}-${selectedDate.getDay()}T00:${selectedTime.getHours()}:${selectedTime.getMinutes()}.000Z`
        console.log(formatedDate)
        // console.log(selectedTime.getHours())

        Alert.alert(
            "Confirmação",
            `Você deseja realmente confirmar sua viagem na data ${selectedDate.toLocaleDateString()} as ${selectedTime.getHours()}:${selectedTime.getMinutes()} ?`,
            [
                {
                    text: "Modificar",
                    onPress: () => { },
                    style: "cancel"
                },
                {
                    text: "Confirmar",
                    onPress: () => confirm(formatedDate)
                }
            ]
        )
    }

    // useEffect(() => {
    //     YesterdayDate()
    // }, [])

    return (
        <Container>
            <GenericHeader
                text="Agendar"
                textStyles={{
                    marginBottom: 25,
                    color: theme.colors.yellow
                }}
                backButton={true}
            />

            <InputsContainer>
                <InputWrapper>
                    <TextH2
                        text="Selecione uma data"
                    />

                    <InvisibleButton
                        onPress={() => showDatePicker()}
                    >
                        <Textregular
                            text={selectedDate ? selectedDate.toLocaleDateString() : 'Data não selecionada'}
                        />
                    </InvisibleButton>

                    <DateTimePickerModal
                        date={selectedDate}
                        isVisible={datePickerVisible}
                        // minimumDate={() => YesterdayDate()}
                        mode="date"
                        onConfirm={handleDateConfirm}
                        onCancel={hideDatePicker}
                    />
                </InputWrapper>

                <InputWrapper>
                    <TextH2
                        text="Selecione um horário"
                    />
                    <InvisibleButton
                        onPress={() => showTimePicker()}
                    >
                        <Textregular
                            text={selectedTime ? `${selectedTime.getHours()}:${selectedTime.getMinutes()}` : 'Hora não selecionada'}
                        />
                    </InvisibleButton>
                    <DateTimePickerModal
                        date={selectedTime}
                        isVisible={timePickerVisible}
                        mode="time"
                        is24Hour
                        // locale="pt-BR"
                        minuteInterval={15}
                        onConfirm={handleTimeConfirm}
                        onCancel={hideTimePicker}
                    />
                </InputWrapper>
            </InputsContainer>



            <DefaultButton
                // onPress={() => navigation.navigate("Confirmation")}
                onPress={() => handleConfirmation()}
            >
                <TextButton
                    text="Confirmar"
                />
            </DefaultButton>
        </Container>
    )
}