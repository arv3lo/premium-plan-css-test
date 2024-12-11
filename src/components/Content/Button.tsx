import { MouseEventHandler } from "react";

type TCustomButtonProps = {
    label: string;
    handleClick: MouseEventHandler<HTMLButtonElement>
}

const CustomButton = ({ label, handleClick }: TCustomButtonProps) => {
    return (
        <button className="customButton" onClick={handleClick} >{label}</button>
    );
}

export default CustomButton;