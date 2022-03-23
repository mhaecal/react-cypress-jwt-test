import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Dashboard() {
  const navigate = useNavigate()

  const handleLogout = async () => {
    const user = localStorage.getItem('user')
    if (user) {
      const accessToken = JSON.parse(user).accessToken
      axios.defaults.headers.common = { Authorization: 'Bearer ' + accessToken }
      const data = await axios.delete('http://localhost:5000/auth/logout')
      if (data.status === 204) {
        localStorage.removeItem('user')
        navigate('/')
      }
    }
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <Link to="/" onClick={() => handleLogout()}>
        Logout
      </Link>
    </div>
  )
}

export default Dashboard
