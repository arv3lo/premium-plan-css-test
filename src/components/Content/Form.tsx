import CheckIcon from '@/assets/icons/Check.svg'
import ProfilePic from '@/assets/images/account.png'

import CustomButton from "./Button";
import CustomInput from "./Input";

const Form = () => {
    const handleSubmit = () => {
        // ...
    }

    return (
        <>
            <h2 className='info-title custom-font-text'>
                Personal Information
            </h2>
            <div className='info-forms flex-row'>
                <div className='form flex-col'>
                    <div className='input-line'>
                        <CustomInput label="Firstname" value="Petter" name="firstname" />
                        <CustomInput label="Lastname" value="Cetera" name="lastname" />
                    </div>
                    <div className='input-line'>
                        <CustomInput label="City" value="London" name="city" />
                        <CustomInput label="Postal Code" value="E2XF" name="zipcode" />
                    </div>
                    <div className='input-line'>
                        <CustomInput label="Address" value="123 Example" name="address" />
                    </div>
                    <div className='input-line'>
                        <CustomInput label="Email" value="petter@gmail.com" name="email" icon={CheckIcon} />
                        <CustomInput label="Phone" value="+442223334444" name="phone" />
                    </div>
                    <div className='input-line half-width'>
                        <CustomInput label="Password" value="" name="password" type="password" />
                    </div>
                    <div className='input-line'>
                        <p className='email-note custom-font-text'>Use this email to log in to your <a href="#" className='external-link'>resumedone.io</a> account and receive notifications.</p>
                    </div>
                    <div className='input-line action-button'>
                        <CustomButton label="Save" handleClick={handleSubmit} />
                    </div>
                </div>
                <div className='profile-image'>
                    <img src={ProfilePic} alt="profile picture" width="60%" height='60%' className='profile-pic' />
                </div>
            </div>
        </>
    );
}

export default Form;