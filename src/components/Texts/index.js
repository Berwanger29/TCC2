import {
    TextButtonStyles,
    TextRegularLight,
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

export function TextSmall({
    text,
    style
}) {
    return (
        <TextRegularLight
            style={style}
        >
            {text}
        </TextRegularLight>
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