import React from 'react';
import {useState} from 'react';
import styles from '../styles/Signup.module.css'
import Head from 'next/head';

function Signup() {

    const [ userName, setUserName ] = useState('')
    const [ password, setPassword ] = useState('')

    const handleSendInfo = () => {

        fetch('http://localhost:3000/singup')
        setUserName("")
        setPassword("")
    }

  return (
    <div className={styles.container}>
      <Head>
        <title>Home App</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <h2 className={styles.title}>Sign up</h2>
      <input className={styles.input} id="input" onChange={(e) => setUserName(e.target.value)}type="text" placeholder="Username" value={userName}/>
      <input className={styles.input2} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" value={password}/>
      <button className={styles.button} onClick={() => handleSendInfo()} >Go</button>
    </div>
  )
}

export default Signup