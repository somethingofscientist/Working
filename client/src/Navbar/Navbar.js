import React from 'react'
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className={styles.navbar}>
                <div className={styles.logo}>
                    <Link to='/'>
                        <img src="https://cdni.iconscout.com/illustration/premium/thumb/password-security-5796001-4849065.png" alt="" />
                    </Link>
                </div>
                <div className={styles.auth_section}>
                    <span>
                        <Link to='/'>Home</Link>
                    </span>
                    <span>
                        <Link to='/login'>Login</Link>
                    </span>
                    <span>
                        <Link to='/register'>Register</Link>
                    </span>
                </div>
            </div>
        </>
    )
}

export default Navbar