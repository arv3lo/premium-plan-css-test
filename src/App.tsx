import { MENU_ITEMS } from '@/common/constants'
import MenuItem from '@/components/Sidebar/MenuItem'
import PremiumLogo from '@/assets/icons/Logo.svg'
import Resumizeme from '@/assets/icons/Resumizeme.svg'

import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='main'>
        <div className='sidebar'>
          <div className='header'>
            <img src={PremiumLogo} height="100%" alt="premium logo" />
            <img src={Resumizeme} height="100%" alt="premium logo" />
          </div>
          <div className='menus'>
            {MENU_ITEMS.map((item, index) => (
              <MenuItem icon={item.icon} label={item.label} key={`${index}-${item.label.toLowerCase()}`} />
            ))}
          </div>
          <div className='footer'>footer</div>
        </div>
        <div className='content'>
          main content
        </div>

      </div>
    </>
  )
}

export default App
