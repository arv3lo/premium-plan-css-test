type TCustomInputProps = {
    name: string;
    label: string;
    value: string;
    icon?: string;
}

const CustomInput = ({ label, name, value, icon }: TCustomInputProps) => {
    return (
        <div className="customInput">
            <input type="text" name={name} value={value} placeholder={label} />
            {icon && (
                <img src={icon} alt="input icon" height="75%" />
            )}
        </div>
    );
}

export default CustomInput;