type LinkMeniuProps = {
    link: string;
    text: string;
};

export function LinkMeniu(props: LinkMeniuProps) {
    return (
        <a className=" text-blue-400" href={props.link}>
            {props.text}
        </a>
    );
}
