import { useEffect, useState } from "react";

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

import DateTimePickerModal from 'react-native-modal-datetime-picker';

import theme from "../../globals/styles/theme"
import { GenericHeader } from "../../components/GenericHeader";





export function Schedule() {

    const date = new Date()

    // const [yesterday, setYesterday] = useState(new Date())

    const [selectedDate, setSelectedDate] = useState(date);
    const [datePickerVisible, setDatePickerVisible] = useState(false);

    const [selectedTime, setSelectedTime] = useState(date);
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
        console.log(`${selectedTime.getHours()}:${selectedTime.getMinutes()}`)
    };

    // useEffect(() => {
    //     YesterdayDate()
    // }, [])

    return (
        <Container>
            {/* <TextTitle
                text={'Agendar'}
                styles={{
                    marginBottom: 25,
                    color: theme.colors.yellow
                }}
            /> */}

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
                        locale="en_GB"
                        onConfirm={handleTimeConfirm}
                        onCancel={hideTimePicker}
                    />
                </InputWrapper>
            </InputsContainer>



            <DefaultButton
                inverted={true}
            >
                <TextButton
                    text="Agendar"
                />
            </DefaultButton>
        </Container>
    )
}