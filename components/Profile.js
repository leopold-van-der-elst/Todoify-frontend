import React from 'react'
import styles from '../styles/Profile.module.css'
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import {  setUsername } from '../reducers/user';

function Profile() {
    
    const dispatch = useDispatch()
    const username = useSelector((state) => state.user.username)
    const router = useRouter();

    const handleLogout = () => {
        router.push('/')
        dispatch(setUsername(null))
    }

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