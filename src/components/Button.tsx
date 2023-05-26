import React from "react";

type ButtonProps = {
    name: string
    callBack: () => void

}
export const Button = (props: ButtonProps) => {

    const onClickHandler = () => {
        props.callBack()

    }
    return (
        <button onClick={onClickHandler}>{props.name}</button>
    )
}