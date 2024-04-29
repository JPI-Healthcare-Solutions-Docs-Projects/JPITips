interface TextType {
    text: string;
}

export const Title: React.FC<TextType> = (props: TextType) => {
    return (
        <h1>{props.text}</h1>
    )
}