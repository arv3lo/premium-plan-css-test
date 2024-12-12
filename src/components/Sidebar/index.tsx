import Header from '@/components/Sidebar/Header'
import Menu from '@/components/Sidebar/Menu'
import AccountMenu from '@/components/Sidebar/AccountMenu'

const Sidebar = () => {
    return ( 
        <div className='sidebar flex-col'>
          <div className='top-sidebar  flex-col'>
            <Header />
            <Menu />
          </div>
          <AccountMenu />
        </div>
     );
}
 
export default Sidebar;