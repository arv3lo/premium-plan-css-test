
import Sidebar from '@/components/Sidebar'
import MainContent from '@/components/Content'

import './App.css'

function App() {
  return (
    <>
      <div className='main flex-row'>        
        <Sidebar />
        <MainContent />
      </div>
    </>
  )
}

export default App
