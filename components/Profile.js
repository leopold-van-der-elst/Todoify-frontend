import React from 'react'
import styles from '../styles/Profile.module.css'
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setConnectionStatus } from '../reducers/user';
import { setToken } from '../reducers/user';

function Profile() {
    
    const dispatch = useDispatch()
    const username = useSelector((state) => state.user.username)
    const status = useSelector((state) => state.user.isLogged)
    const router = useRouter();
    const handleLogout = () => {
        dispatch(setConnectionStatus())
        dispatch(setToken(""))
    }
    console.log(username)

  return (
    <div className={styles.container}>
        <div className={styles.topContent}>
        <p className={styles.username}>Welcome {username}</p>
        </div>
        <div className={styles.line}></div>
        <button className={styles.btn} onClick={() => handleLogout()}>Logout</button>
    </div>
   
  )
}

export default Profile