import { MENU_ITEMS } from '@/common/constants'
import MenuItem from '@/components/Sidebar/MenuItem'

const Menu = () => {
    return (
        <div className='menus'>
            {MENU_ITEMS.map((item, index) => (
                <MenuItem icon={item.icon} label={item.label} key={`${index}-${item.label.toLowerCase()}`} />
            ))}
        </div>
    );
}

export default Menu;