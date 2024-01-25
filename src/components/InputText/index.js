import { useEffect } from "react"
import {
    Container,
} from "./styles"


export function InputText({
    onChangeText,
    placeholder,
    value,
    style
}) {

    // useEffect(() => {
    //     console.log(onChangeText)
    // }, [])

    return (
        <Container
            onChangeText={() => { }}
            placeholder={placeholder}
            style={style}
        >

        </Container>
    )
}