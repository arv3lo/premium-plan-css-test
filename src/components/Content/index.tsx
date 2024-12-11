import CheckIcon from '@/assets/icons/Check.svg'

import CustomButton from "./Button";
import CustomInput from "./Input";

const MainContent = () => {
    const handleSubmit = () => {
        // ...
    }
    return (
        <div className='content'>
            <CustomInput label="Firstname" value="Petter" name="firstname" />
            <CustomInput label="Lastname" value="Cetera" name="lastname" icon={CheckIcon} />
            <CustomButton label="Valider" handleClick={handleSubmit} />
        </div>
    );
}

export default MainContent;