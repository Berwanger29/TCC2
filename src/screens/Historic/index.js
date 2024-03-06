import { useContext } from "react";

import { Container, List } from "./styles";

import { TextSmall, TextTitle } from "../../components/Texts";
import { UserDBContext } from "../../context/UserDBContext";
import { ListItem } from "../../components/ListItem";
import { LoadingScreen } from "../../components/LoadingScreen.js";

export function Historic() {
  const { userDBContext } = useContext(UserDBContext);

  if (!userDBContext) {
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
        data={userDBContext.historic}
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
