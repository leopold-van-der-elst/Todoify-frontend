import React from 'react';
import {useState} from 'react';

function Signup() {

    const [ firstName, setFirstName ] = useState('')
    const [ userName, setUserName ] = useState('')
    const [ password, setPassword ] = useState('')

    const handleSendInfo = () => {

        fetch('http://localhost:3000/singup')
        setFirstName("")
        setUserName("")
        setPassword("")
    }

  return (
    <>
      <h2>Sign up</h2>
      <input onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="First name" value={firstName}/>
      <input onChange={(e) => setUserName(e.target.value)}type="text" placeholder="Username" value={userName}/>
      <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" value={password}/>
      <button onClick={() => handleSendInfo()} >Sign up</button>
    </>
  )
}

export default Signup