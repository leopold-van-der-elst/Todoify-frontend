import React from 'react'
import { useEffect, useState } from 'react'
import TaskCard from './taskCard'
import Profile from './Profile'
import styles from '../styles/Mid.module.css'
import { useSelector } from 'react-redux';


function Mid() {


  const [tasksData, setTasksData] = useState([])
  

  const token = useSelector((state) => state.user.token)
  const helper = useSelector((state) => state.user.helper)


  useEffect(() => {
    console.log(token)
    fetch(`http://localhost:3000/tasks/${token}`)
    .then(res => res.json())
    .then(data => {
      setTasksData(data)
    })
  }, [helper])


const filtredArray = tasksData.sort((a, b) => (a.priority < b.priority) ? 1 : -1)
const tasks = filtredArray.map((e,i) => {
  return <TaskCard key={i} id={e._id} username={e.owner.username} taskname={e.title} priority={e.priority} description={e.description}/>
})


  return (
    <div className={styles.container}>
        <Profile/>
        {tasks}
    </div>
  )
}

export default Mid