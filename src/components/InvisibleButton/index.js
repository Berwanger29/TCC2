import { Container } from "./styles";


export function InvisibleButton({
    children,
    style,
    onPress
}) {
    return (
        <Container
            style={style}
            onPress={onPress}
        >
            {children}
        </Container>
    )
}