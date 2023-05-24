type BodeType = {
    titleForBody: string
}
export const Body = (props:BodeType) => {
    return (
        <div>{props.titleForBody}</div>
    )
}