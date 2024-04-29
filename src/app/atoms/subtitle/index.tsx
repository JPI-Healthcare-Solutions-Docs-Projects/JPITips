interface TextType {
    text: string;
}

export const Subtitle: React.FC<TextType> = (props: TextType) => {
    return (
        <h3>{props.text}</h3>
    )
}