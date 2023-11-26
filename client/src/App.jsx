import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserForm from './components/UserForm.jsx'
import AdminPage from './components/AdminPage.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <UserForm/>
      {/* <AdminPage/> */}
    </div>
  )
}

export default App
