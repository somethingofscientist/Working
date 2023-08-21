import React, { useState } from 'react'
import styles from './Page.module.css';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';

const Register = () => {
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
    })
    const handleRegister = async (e) => {
        e.preventDefault()
        const { name, email, password } = data
        try {
            const { data } = await axios.post(`/register`, {
                name, email, password
            })
            if (data.error) {
                toast.dismiss();
                toast.error(data.error);
            }
            else {
                setData(data)
                toast.dismiss();
                toast.success(data.json);
            }
        } catch (error) {
            toast.dismiss();
            toast.success(data.json);
            console.log(error);
        }
        console.log('register button is clicked')
    }
    return (
        <>
            <h1>Register</h1>
            <div className={styles.register_form}>
                <form onSubmit={handleRegister}>
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
                </form>
            </div>
        </>
    )
}

export default Register