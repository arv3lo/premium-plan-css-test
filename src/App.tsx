import Header from '@/components/Sidebar/Header'
import Menu from '@/components/Sidebar/Menu'
import Footer from '@/components/Sidebar/Footer'
import MainContent from '@/components/Content'

import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='main'>
        <div className='sidebar'>
          <Header />
          <Menu />
          <Footer />
        </div>
        <MainContent />
      </div>
    </>
  )
}

export default App
