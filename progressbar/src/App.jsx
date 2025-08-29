
import { useState } from 'react'
import ProgressBar from './components/ProgressBar'
import './index.css'

function App() {
  const [show, setShow] = useState(false)

  return (
    <>
      {
        show ? <ProgressBar /> : ""
      }
      <button onClick={() => setShow(!show)}>Toogle</button>
    </>
  )
}

export default App
