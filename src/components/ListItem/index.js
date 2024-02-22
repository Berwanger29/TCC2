import { TextSmall } from "../Texts";
import {
    Container, ContainerStatusColor, WrapperStatus
} from "./styles";


export function ListItem({
    origin,
    destiny,
    passengers,
    price,
    dateScheduled,
    status
}) {
    return (
        <Container>
            <TextSmall
                text={origin}
            />
            <TextSmall
                text={destiny}
            />
            <TextSmall
                text={passengers}
            />
            <TextSmall
                text={price}
            />

            <WrapperStatus>
                <TextSmall
                    text="Status: "
                />
                <ContainerStatusColor
                    status={status}
                >
                    <TextSmall
                        text={status}
                    />
                </ContainerStatusColor>
            </WrapperStatus>
            <TextSmall
                text={dateScheduled}
            />
        </Container>
    )
}