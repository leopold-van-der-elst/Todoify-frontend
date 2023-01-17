import React from 'react'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'
import Mid from '../components/Mid'
import Left from '../components/Left'
import { useSelector } from 'react-redux';
import { setConnectionStatus } from '../reducers/user';
import { useRouter } from 'next/router';

function HomePage() {
  const router = useRouter();
  const connectionStatus = useSelector((state) => state.user.isLogged);

  useEffect(() => {
    if (!connectionStatus) {
      router.push('/');
    }
  }, [connectionStatus]);

  return (
    <>
    {connectionStatus ? (
      <div className={styles.container}>
        <Left />
        <Mid />
      </div>
    ) : null}
  </>
);
}

export default HomePage