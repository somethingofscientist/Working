import React, { useState } from 'react'
import styles from './styles.module.css';


const Login = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const loginUser = () => {
    e.preventDefault();

  }
  return (
    <>
      <form onSubmit={loginUser}>
        <div className={styles.form}>
          <input type="email" placeholder='Email' value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
          <input type="password" placeholder='Password' value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} />
          <button type='submit'>
            Login
          </button>
        </div>
      </form>
    </>
  )
}

export default Login;  