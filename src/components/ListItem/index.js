import { View } from "react-native";
import { TextH2, TextSmall } from "../Texts";
import {
  Container,
  ContainerStatusColor,
  WrapperStatus,
  WrapperDateTime,
} from "./styles";
import theme from "../../globals/styles/theme";

export function ListItem({
  origin,
  destiny,
  passengers,
  price,
  dateScheduled,
  status,
  key,
}) {
  return (
    <Container key={key} style={{backgroundColor: theme.colors.tabBarBackground}}>
      <View style={{marginVertical: 10}}>
        {/* <TextSmall text={origin} /> */}
        <TextH2 text={destiny} />
        {/* <TextSmall text={passengers} /> */}

        <WrapperStatus>
          <TextSmall text="Status: " />
          <ContainerStatusColor status={status}>
            <TextSmall text={status} style={{ textTransform: "capitalize" }} />
          </ContainerStatusColor>
        </WrapperStatus>
        <TextH2 text={price} style={{ fontSize: 26 }} />
      </View>

      <WrapperDateTime style={{borderLeftWidth:  1, borderLeftColor: theme.colors.tabBarIconColor}}>
        <TextSmall text={dateScheduled.slice(0, -8)} style={{ fontSize: 25 }} />
        <TextSmall text={dateScheduled.slice(-5)} style={{ fontSize: 20 }} />
      </WrapperDateTime>
    </Container>
  );
}
