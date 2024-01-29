import { useState } from "react"
import {
    Container,
    EyeIcon,
    Input,
    TogglePasswordButton,
} from "./styles"

export function InputText({
    onChangeText,
    placeholder,
    value,
    style,
    isPassword = false
}) {

    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

    function ToggleSeePasswrod() {
        setIsPasswordVisible(!isPasswordVisible)
    }

    return (
        <Container
        >
            <Input
                onChangeText={onChangeText}
                placeholder={placeholder}
                value={value}
                isPassword={isPassword}
                style={style}
                secureTextEntry={isPasswordVisible}
            />

            {isPassword ?
                (
                    <TogglePasswordButton
                        onPress={ToggleSeePasswrod}
                    >
                        <EyeIcon
                            name={isPasswordVisible ? "eye" : "eye-with-line"}
                        />
                    </TogglePasswordButton>
                )
                :
                (<></>)
            }

        </Container>
    )
}