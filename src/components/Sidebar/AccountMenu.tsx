import Profile from '@/assets/images/profile.png'
import Setting from '@/assets/icons/Settings.svg'

const AccountMenu = () => {
    return (
        <div className='account-menu'>
            <div className='account-info'>
                <img src={Profile} alt="account picture" width="15%" className='account-pic' />
                <div className=''>
                    <p className='custom-font-text'>Carla</p>
                </div>
            </div>
            <img src={Setting} alt="settings" width="8%" className='setting-icon'/>
        </div>
    );
}

export default AccountMenu;