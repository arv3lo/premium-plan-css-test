import { MouseEventHandler } from "react";

type TCustomButtonProps = {
    label: string;
    handleClick: MouseEventHandler<HTMLButtonElement>
    className?: string
}

const CustomButton = ({ label, handleClick, className }: TCustomButtonProps) => {
    return (
        <button className={className ?? "filled-button"} onClick={handleClick} >{label}</button>
    );
}

export default CustomButton;