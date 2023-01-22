import styles from '../styles/Login.module.css'
import React from 'react';
import Head from 'next/head';
import Signup from '../components/Signup';
import Signin from '../components/Signin';

function Login() {
  return (
   <div className={styles.container}>
      <Head>
        <title>Todoify</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={styles.modale}>
        <div class="modale-content">
        <p style={{fontSize: "28px", color: "white", height: "400px", margin: "30px", textAlign: "center", lineHeight: "40px"}}>Please use a larger screen to access this web application 😁.😁</p>
        </div>
    </div>
      <div className={styles.leftContainer}>
      </div>
       <div className={styles.rightContainer}>
      <Signup/>
      <div className={styles.orDiv}>
        <h2 className={styles.title}>Or</h2>
      </div>
      <Signin />
    </div>
    </div>
  )
}

export default Login