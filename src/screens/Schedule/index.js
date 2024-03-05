import { useContext, useMemo, useState } from "react";
import { Alert, Platform } from "react-native";

import {
  Container,
  InputWrapper,
  InputsContainer,
  InvisibleButton,
} from "./styles";

import { TextButton, TextH2, Textregular } from "../../components/Texts";
import { DefaultButton } from "../../components/DefaultButton";
import { GenericHeader } from "../../components/GenericHeader";

import DateTimePickerModal from "react-native-modal-datetime-picker";
import RadioGroup from "react-native-radio-buttons-group";
import { Picker } from "@react-native-picker/picker";

import theme from "../../globals/styles/theme";
import moment from "moment";
import { UserContext } from "../../context/UserContext";
import { useNavigation } from "@react-navigation/native";
import { ConfirmationController } from "../../controllers/ConfirmationController";

export function Schedule() {
  const { userDataContext } = useContext(UserContext);
  const navigation = useNavigation();

  const radioButtons = useMemo(
    () => [
      {
        id: "Novo Airão", // acts as primary key, should be unique and non-empty string
        label: "Novo Airão",
        value: "Novo Airão",
        color: theme.colors.yellow,
        // labelStyle: {
        //     color: theme.colors.white //modified at the root component
        // }
      },
      {
        id: "Manaus",
        label: "Manaus",
        value: "Manaus",
        color: theme.colors.yellow,
      },
    ],
    []
  );

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const [selectedTime, setSelectedTime] = useState(minimumTime());
  const [timePickerVisible, setTimePickerVisible] = useState(false);
  const [selectedRadioButton, setSelectedRadioButton] = useState("");
  const [amountPassengersPicker, setAmountPassengersPicker] = useState(1);

  function showDatePicker() {
    setDatePickerVisible(true);
  }
  function hideDatePicker() {
    setDatePickerVisible(false);
  }
  function handleDateConfirm(date) {
    setSelectedDate(date);
    hideDatePicker();
  }

  function showTimePicker() {
    setTimePickerVisible(true);
  }
  function hideTimePicker() {
    setTimePickerVisible(false);
  }
  function handleTimeConfirm(time) {
    console.log(moment(time).format("HH:mm"));
    setSelectedTime(time);
    hideTimePicker();
  }

  async function confirm(formatedDate) {
    console.log(formatedDate);
    const newSchedule = new ConfirmationController();
    const isAddedHistoricSuccess = newSchedule.ConfirmationUploadController(
      userDataContext.uid,
      formatedDate
    );

    if (isAddedHistoricSuccess) {
      navigation.navigate("Confirmation");
    }
  }

  function handleConfirmation() {
    const formattedDate = moment(selectedDate)
      .locale("pt-BR")
      .format("DD/MM/YYYY");
    const formattedTime = moment(selectedTime).locale("pt-BR").format("HH:mm");

    Alert.alert(
      "Confirmação",
      `Você deseja realmente confirmar sua viagem na data ${formattedDate} as ${formattedTime} ?`,
      [
        {
          text: "Modificar",
          onPress: () => {},
          style: "cancel",
        },
        {
          text: "Confirmar",
          // onPress: () => confirm()
          onPress: () => {},
        },
      ]
    );
  }

  function minimumTime() {
    let hours = moment().locale("pt-br").format("HH");
    let minutes = moment().locale("pt-br").format("mm");

    if (minutes[1] !== "0") {
      let algorism = parseInt(minutes[1]);
      let dif = 10 - algorism;
      minutes = Number(minutes) + dif;
    }

    const time = new Date(
      Number(moment(selectedDate).format("YYYY")),
      Number(moment(selectedDate).format("MM")),
      Number(moment(selectedDate).format("DD")),
      Number(hours),
      Number(minutes)
    );

    return time;
  }

  return (
    <Container>
      <GenericHeader
        text="Agendar"
        textStyles={{
          marginBottom: 25,
          color: theme.colors.yellow,
        }}
        backButton={true}
      />

      <InputsContainer>
        <InputWrapper>
          <TextH2 text="Selecione uma data" />

          <InvisibleButton onPress={() => showDatePicker()}>
            <Textregular
              text={`${moment(selectedDate)
                .locale("pt-BR")
                .format("DD/MM/YYYY")}`}
            />
          </InvisibleButton>

          <DateTimePickerModal
            date={selectedDate}
            isVisible={datePickerVisible}
            minimumDate={selectedDate}
            mode="date"
            onConfirm={handleDateConfirm}
            onCancel={hideDatePicker}
            locale="pt_BR"
          />
        </InputWrapper>

        <InputWrapper>
          <TextH2 text="Selecione um horário" />
          <InvisibleButton onPress={() => showTimePicker()}>
            <Textregular
              text={
                selectedTime
                  ? `${moment(selectedTime).format("HH:mm")}`
                  : "Hora não selecionada"
              }
            />
          </InvisibleButton>
          <DateTimePickerModal
            date={selectedTime}
            isVisible={timePickerVisible}
            mode="time"
            is24Hour
            minuteInterval={10}
            minimumDate={minimumTime()}
            onConfirm={handleTimeConfirm}
            onCancel={hideTimePicker}
          />
        </InputWrapper>
        <InputWrapper>
          <TextH2 text="Selecione um destino" />
          <RadioGroup
            radioButtons={radioButtons}
            onPress={setSelectedRadioButton}
            selectedId={selectedRadioButton}
            containerStyle={{
              alignSelf: "center",
              alignItems: "flex-start",
            }}
          />
        </InputWrapper>

        <InputWrapper>
          <TextH2 text="Quantas pessoas ?" />
          <Picker
            selectedValue={amountPassengersPicker}
            onValueChange={(itemValue, itemIndex) =>
              setAmountPassengersPicker(itemValue)
            }
            style={{
              color: theme.colors.yellow,
              width: 100,
            }}
          >
            <Picker.Item
              color={Platform.OS === "ios" ? theme.colors.yellow : "#000"}
              label="1"
              value="1"
            />
            <Picker.Item
              color={Platform.OS === "ios" ? theme.colors.yellow : "#000"}
              label="2"
              value="2"
            />
            <Picker.Item
              color={Platform.OS === "ios" ? theme.colors.yellow : "#000"}
              label="3"
              value="3"
            />
            <Picker.Item
              color={Platform.OS === "ios" ? theme.colors.yellow : "#000"}
              label="4"
              value="4"
            />
          </Picker>
        </InputWrapper>
      </InputsContainer>

      <DefaultButton
        // onPress={() => navigation.navigate("Confirmation")}
        onPress={() => handleConfirmation()}
      >
        <TextButton text="Confirmar" />
      </DefaultButton>
    </Container>
  );
}
