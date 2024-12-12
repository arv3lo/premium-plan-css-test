import PremiumLogo from '@/assets/icons/Logo.svg'
import Resumizeme from '@/assets/icons/Resumizeme.svg'

const Header = () => {
    return (
        <div className='header'>
            <img src={PremiumLogo} height="100%" alt="premium logo" />
            <img src={Resumizeme} height="100%" alt="premium logo" />
        </div>
    );
}

export default Header;