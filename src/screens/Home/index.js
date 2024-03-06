import { useContext, useEffect, useState } from "react";

import { Container, Header, TripButton } from "./styles";

import { TextSmall, TextTitle, Textregular } from "../../components/Texts";
import { LoadingScreen } from "../../components/LoadingScreen.js";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { UserContext } from "../../context/UserContext";

import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import theme from "../../globals/styles/theme.js";
import { useNavigation } from "@react-navigation/native";
import format from "pretty-format";
import { UserDBContext } from "../../context/UserDBContext.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ListItem } from "../../components/ListItem/index.js";
import { View } from "react-native";

export function Home({ route }) {
  const { userDataContext, setUserDataContext } = useContext(UserContext);
  const { userDBContext, setUserDBContext } = useContext(UserDBContext);
  const { triggerUserEffect } = route.params;
  const navigation = useNavigation();

  const [userName, setUserName] = useState("");
  const [trigger, setTrigger] = useState(0);
  const [nextTrip, setNextTrip] = useState();

  async function getLoginUserData() {
    try {
      const jsonValue = await AsyncStorage.getItem("loginUserData");
      let aux = JSON.parse(jsonValue);
      setUserDataContext(aux);

      return aux;
    } catch (err) {
      console.error(err);
      return;
    }
  }

  async function getUserDataDB() {
    let docSnap;

    const storedData = await getLoginUserData();

    // console.log(
    //   storedData.then((a) => {
    //     console.log(a);
    //   })
    // );

    if (userDataContext) {
      const docRef = doc(db, "passengers", userDataContext.uid);
      docSnap = await getDoc(docRef);
    } else if (storedData) {
      const docRef = doc(db, "passengers", storedData.uid);
      docSnap = await getDoc(docRef);
    }

    setUserName(docSnap.data().name);
    setUserDBContext(docSnap.data());
    getNextTrip(docSnap.data().historic);
  }

  function getGreeting() {
    let greeting;
    let hour = new Date();
    hour = hour.getHours();

    switch (true) {
      case hour > 6 && hour <= 12:
        greeting = ", bom dia";
        break;
        
      case hour > 12 && hour <= 18:
        greeting = ", boa tarde";
        break;

      case hour > 18 || hour < 5:
        greeting = ", boa noite";
        break;

      default:
        greeting = "";
        break;
    }
    return greeting;
  }

  function getTripDate(tripDate) {
    const day = tripDate.slice(0, 2);
    const month = tripDate.slice(3, 5);
    const year = tripDate.slice(6);
    return new Date(year, month, day);
  }

  function getNextTrip(trips) {
    const nextTrips = trips.filter((trip) => trip.status === "agendado");

    const sortedAsc = nextTrips.sort(
      (objA, objB) =>
        getTripDate(objA.dateTime.slice(0, -8)) -
        getTripDate(objB.dateTime.slice(0, -8))
    );

    setNextTrip(sortedAsc[0]);
  }

  useEffect(() => {
    setTrigger(triggerUserEffect);
    getUserDataDB();
  }, [trigger]);

  if (userName === "") {
    return (
      <Container>
        <LoadingScreen />
      </Container>
    );
  }

  return (
    <Container>
      <Header>
        <TextTitle text={`Olá ${userName}${getGreeting()}`} />
        <TextSmall text="Veja detalhes de sua próxima viagem!" />
      </Header>

      <View style={{ flex: 1, marginTop: 20, alignItems: "center" }}>
        {nextTrip ? (
          <ListItem
            key={nextTrip.scheduleId}
            origin={`Origem: ${nextTrip.origin}`}
            destiny={`Viagem para: ${nextTrip.destiny}`}
            passengers={`Passageiros: ${nextTrip.passengers}`}
            price={`R$ ${nextTrip.price},00`}
            status={nextTrip.status}
            dateScheduled={nextTrip.dateTime}
          />
        ) : (
          <Textregular text="Você ainda não fez agendamentos!" />
        )}
      </View>

      <TripButton onPress={() => navigation.navigate("Schedule")}>
        <Textregular
          text="Agendar"
          style={{
            color: theme.colors.blue,
            fontSize: 30,
            marginRight: 10,
          }}
        />
      </TripButton>
    </Container>
  );
}
