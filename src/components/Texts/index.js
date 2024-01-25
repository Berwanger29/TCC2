import {
    TextButtonStyles,
    TextRegularLight,
    TextStyleH2,
    TextTitleStyles,
} from "./styles";


export function TextTitle({
    text,
    styles
}) {
    return (
        <TextTitleStyles
            style={styles}
        >
            {text}
        </TextTitleStyles>
    )
}

export function TextH2({
    text,
    style
}) {
    return (
        <TextStyleH2
            style={style}
        >
            {text}
        </TextStyleH2>
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


export function TextButton({
    text,
    styles
}) {
    return (
        <TextButtonStyles
            style={styles}
        >
            {text}
        </TextButtonStyles>
    )
}