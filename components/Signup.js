import React from 'react';
import {useState} from 'react';
import styles from '../styles/Signup.module.css'
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setConnectionStatus } from '../reducers/user';
import { setUsername } from '../reducers/user';
import { setToken } from '../reducers/user';

function Signup() {

    const [ userName, setUserName ] = useState('')
    const [ password, setPassword ] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const dispatch = useDispatch()
    const router = useRouter();


    const handleSendInfo = () => {
        fetch('http://localhost:3000/users/signup', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({username: userName, password: password})  
        })
        .then(response => response.json())
        .then(data => {
          if(data.result){
            console.log(data.user.token)
            dispatch(setConnectionStatus())
            dispatch(setUsername(userName))
            dispatch(setToken(data.user.token))
            router.push('/home')
          }
          else{
            setErrorMessage(data.error)
          }
        })
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
      <p className={styles.errorMessage}>{errorMessage}</p>
      <button className={styles.button} onClick={() => handleSendInfo()} >Go</button>
    </div>
  )
}

export default Signup