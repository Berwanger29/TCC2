import {
    Container,
} from "./styles";


export function LoginButton({
    children,
    style
}) {
    return (
        <Container
            style={style}
        >
            {children}
        </Container>
    )
}