import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import UserForm from './components/UserForm.jsx'
import AdminPage from './components/AdminPage.jsx'

function App() {
  axios.defaults.baseURL = 'http://localhost:5555'

  return (
    <div>
      <UserForm/>
      {/* <AdminPage/> */}
    </div>
  )
}

export default App
