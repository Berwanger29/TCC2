import {
    TextButtonStyles,
    TextRegularLight,
    TextStyleH2,
    TextStyleRegular,
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

export function Textregular({
    text,
    style
}) {
    return (
        <TextStyleRegular
            style={style}
        >
            {text}
        </TextStyleRegular>
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