import {
    TextButtonStyles,
    TextTitleStyles,
} from "./styles";


export function TextTitle({ text, styles = {} }) {
    return (
        <TextTitleStyles
            style={styles}
        >
            {text}
        </TextTitleStyles>
    )
}


export function TextButton({ text, styles }) {
    return (
        <TextButtonStyles
            style={styles}
        >
            {text}
        </TextButtonStyles>
    )
}