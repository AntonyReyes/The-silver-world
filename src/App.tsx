import { useState } from 'react'

import './App.css'
import './Css/Header.css'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header/>
      </div>
      
    </>
  )
}

export default App
