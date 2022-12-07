import styles from '../styles/Home.module.css'
import React from 'react';
import Head from 'next/head';
import Signup from '../components/Signup';
import Signin from '../components/Signin';

function Home() {
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
      <Signup/>
      <div className={styles.orDiv}>
        <h2 className={styles.title}>Or</h2>
      </div>
      <Signin />
    </div>
  )
}

export default Home