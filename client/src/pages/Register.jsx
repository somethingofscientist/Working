import React, { useState } from 'react'
import styles from './styles.module.css';

const Register = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const registerUser = () => {
    e.preventDefault();
  }


  return (
    <>
      <form onSubmit={registerUser}>
        <div className={styles.form}>
          <input
            type="text"
            placeholder='Name'
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
          <input
            type="email"
            placeholder='Email'
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <input
            type="password"
            placeholder='Password'
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          <button type='submit'>
            Register
          </button>
        </div>
      </form>
    </>
  )
}

export default Register;