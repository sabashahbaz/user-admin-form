import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserForm from './components/UserForm.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>homepage</p>
      <UserForm/>
    </div>
  )
}

export default App