import { Container } from "./styles";


export function DefaultButton({
    onPress,
    children,
    style,
    inverted = false
}) {
    return (
        <Container
            onPress={onPress}
            style={style}
            inverted={inverted}
        >
            {children}
        </Container>
    )
}