import { Container } from "./styles";


export function DefaultButton({ onPress, children }) {
    return (
        <Container
            onPress={onPress}
        >
            {children}
        </Container>
    )
}