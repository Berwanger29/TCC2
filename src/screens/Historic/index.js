import { useContext, useEffect, useState } from "react";

import { Container, List } from "./styles";

import { TextSmall, TextTitle } from "../../components/Texts";
import { UserDBContext } from "../../context/UserDBContext";
import { ListItem } from "../../components/ListItem";
import { LoadingScreen } from "../../components/LoadingScreen.js";
import { UserContext } from "../../context/UserContext.js";

export function Historic() {
  const { userDB } = useContext(UserContext);

  const [trips, setTrips] = useState([]);

  async function getTrips() {
    const aux = await userDB;
    setTrips(aux.historic);
  }

  useEffect(() => {
    getTrips();
  }, []);

  if (trips.length === 0) {
    return (
      <Container>
        <LoadingScreen />
      </Container>
    );
  }

  return (
    <Container>
      <TextTitle
        text={"Agendamentos"}
        styles={{
          marginBottom: 20,
        }}
      />
      <List
        data={trips}
        showsVerticalScrollIndicator={false}
        renderItem={({ index, item }) => {
          return (
            <ListItem
              key={item.scheduleId}
              origin={`Origem: ${item.origin}`}
              // destiny={`Destino: ${item.destiny}`}
              destiny={`${item.destiny}`}
              passengers={`Passageiros: ${item.passengers}`}
              price={`R$ ${item.price},00`}
              status={item.status}
              dateScheduled={item.dateTime}
            />
          );
        }}
      />
    </Container>
  );
}
