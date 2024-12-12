type TCustomInputProps = {
    name: string;
    label: string;
    value?: string;
    icon?: string;
    type?: string;
}

const CustomInput = ({ label, name, icon, type = "text" }: TCustomInputProps) => {
    return (
        <div className="customInput">
            <label htmlFor={name} className="custom-font-text">{label}</label>
            <input type={type} id={name} name={name} placeholder={label} />
            {icon && (
                <img src={icon} alt="input icon" height="75%" />
            )}
        </div>
    );
}

export default CustomInput;