import { useContext } from "react";

import { Container, List } from "./styles";

import { TextSmall, TextTitle } from "../../components/Texts";
import { UserDBContext } from "../../context/UserDBContext";
import { ListItem } from "../../components/ListItem";
import { LoadingScreen } from "../../components/LoadingScreen.js";






export function Historic() {

    const { userDBContext } = useContext(UserDBContext)

    if (!userDBContext) {
        return (
            <Container>
                <LoadingScreen />
            </Container>
        )
    }

    return (
        <Container>
            <TextTitle
                text={'Agendamentos'}
                styles={{
                    marginBottom: 20
                }}
            />
            <List
                data={userDBContext.historic}
                showsVerticalScrollIndicator={false}
                renderItem={({ index, item }) => {
                    return (
                        <ListItem
                            origin={`Origem: ${item.origin}`}
                            destiny={`Destino ${item.destiny}`}
                            passengers={`Passageiros: ${item.passengers}`}
                            price={`R$ ${item.price}`}
                            status={item.status}
                            dateScheduled={item.dateTime}
                        />
                    )
                }}
            />
        </Container>
    )
}