import React from 'react';
import { useState } from 'react';

function Signin() {

    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const handleSendInfo = () => {
        console.log(password, username)
        setUserName('')
        setPassword('')
    }

  return (
    <>
      <h2>Sign in</h2>
      <input onChange={(e) => setUserName(e.target.value)} type="text" placeholder='username' value={username}/>
      <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='password' value={password}/>
      <button onClick={() => handleSendInfo()}>Sign in</button>
    </>
  )
}

export default Signin