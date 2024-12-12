import Header from '@/components/Sidebar/Header'
import Menu from '@/components/Sidebar/Menu'
import AccountMenu from '@/components/Sidebar/AccountMenu'

const Sidebar = () => {
    return ( 
        <div className='sidebar'>
          <div className='top-sidebar'>
            <Header />
            <Menu />
          </div>
          <AccountMenu />
        </div>
     );
}
 
export default Sidebar;