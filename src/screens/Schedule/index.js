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

  const [selectedDate, setSelectedDate] = useState(minimumTime());
  const [datePickerVisible, setDatePickerVisible] = useState(false);
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

  async function confirm(schedule) {
    const newSchedule = new ConfirmationController();
    const isAddedHistoricSuccess = newSchedule.ConfirmationUploadController(
      userDataContext.uid,
      (dateTime = schedule.date),
      (passengers = amountPassengersPicker),
      (destiny = selectedRadioButton),
      (origin = selectedRadioButton === "Manaus" ? "Novo Airão" : "Manaus"),
      (price = 85 * amountPassengersPicker)
    );

    if (isAddedHistoricSuccess) {
      navigation.navigate("Confirmation");
    }
  }

  function handleConfirmation() {
    const formattedDate = moment(selectedDate)
      .locale("pt-BR")
      .format("DD/MM/YYYY @ HH:mm");

    const price = amountPassengersPicker * 85;

    if (selectedDate === undefined || selectedRadioButton === "") {
      Alert.alert("Preencha todos os campos!");
    } else {
      Alert.alert(
        "Confirmação",
        `Você deseja realmente confirmar sua viagem na data ${formattedDate.slice(
          0,
          10
        )} às ${formattedDate.slice(
          13
        )} partindo de ${selectedRadioButton} com ${amountPassengersPicker} passageiros no valor de R$${price},00?`,
        [
          {
            text: "Modificar",
            onPress: () => {},
            style: "cancel",
          },
          {
            text: "Confirmar",
            onPress: () => confirm({ date: formattedDate }),
          },
        ]
      );
    }
  }

  function minimumTime() {
    let hours = moment().locale("pt-br").format("HH");
    let minutes = moment().locale("pt-br").format("mm");

    if (minutes[1] !== "0") {
      let algorism = Number(minutes[1]);
      let dif = 10 - algorism;
      minutes = Number(minutes) + dif;
    }

    const time = new Date(
      Number(moment().format("YYYY")),
      Number(moment().format("MM") - 1),
      Number(moment().format("DD")),
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
          <TextH2 text="Selecione uma data e horário" />

          <InvisibleButton onPress={() => showDatePicker()}>
            <Textregular
              style={{ fontSize: 20 }}
              text={`${moment(selectedDate)
                .locale("pt-BR")
                .format("DD/MM/YYYY | HH:mm")}`}
            />
          </InvisibleButton>

          <DateTimePickerModal
            date={selectedDate}
            isVisible={datePickerVisible}
            minimumDate={minimumTime()}
            mode="datetime"
            onConfirm={handleDateConfirm}
            onCancel={hideDatePicker}
            minuteInterval={10}
            locale="pt_BR"
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
              flexDirection: "row",
            }}
            labelStyle={{ fontSize: 18 }}
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
              width: "100%",
              alignSelf: "center",
              marginTop: -60,
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
        style={{ height: 75 }}
        onPress={() => handleConfirmation()}
      >
        <TextButton text="Confirmar" />
      </DefaultButton>
    </Container>
  );
}
