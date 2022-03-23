import React, { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login() {
  const navigate = useNavigate()

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault()
    const data = await axios
      .post('http://localhost:5000/auth/login', { email, password })
      .then((res) => res.data)
    if (data.accessToken) {
      localStorage.setItem('user', JSON.stringify(data))
      navigate('/dashboard')
    }
  }

  return (
    <form onSubmit={(e) => handleLogin(e)}>
      <h1>Login</h1>
      <p>
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required={true}
        />
      </p>
      <p>
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required={true}
        />
      </p>
      <button type="submit">Login</button>
    </form>
  )
}

export default Login
