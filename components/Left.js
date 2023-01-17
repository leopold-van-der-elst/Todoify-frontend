import React from 'react'
import { useState } from 'react'
import styles from '../styles/Left.module.css'
import { Button, Slider, Switch } from 'antd';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setHelper } from '../reducers/user';

function Left() {

  const [taskName, setTaskName] = useState("")
  const [taskDescription, setTaskDescription] = useState("")
  const [priority, setPriority] = useState(1)
  const [taskBuddy, setTaskBuddy] = useState("")

const dispatch = useDispatch()
const token = useSelector((state) => state.user.token)


const createTask = () => {
  fetch(`https://task-app-backend.vercel.app/tasks/add`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({name: taskName, description: taskDescription, priority, token}),
  }).then(() => {
    setTaskName("")
    setTaskDescription("")
    setPriority(1)
    dispatch(setHelper())
  }).catch(err => {console.log(err)})
}


  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h3 className={styles.title}>New task</h3>
        <textarea value={taskName} className={styles.inputName} onChange={(e) => setTaskName(e.target.value)}/>
        <p className={styles.textLength}>{`${taskName.length}/100`}</p>
      </div>
      <div className={styles.mid}>
        <h3 className={styles.title}>Description</h3>
        <textarea value={taskDescription} className={styles.inputDescription}  onChange={(e) => setTaskDescription(e.target.value)}/>
        <p className={styles.textLength}>{`${taskDescription.length}/250`}</p>
      </div>
    <div className={styles.bot}>
      <div className={styles.priority}>
        <h3 className={styles.priorityTitle}>Priority level</h3>
        <h3 className={styles.priorityTitle}>{priority}</h3>  
      </div>
        <Slider value={priority} onChange={setPriority} className={styles.slider} size="small" min={1} max={5}/>
      </div>
      <div className={styles.bottom}>
        <Button className={styles.createButton} onClick={()=> createTask()}>CREATE</Button>
      </div>
  </div>
  )
}

export default Left