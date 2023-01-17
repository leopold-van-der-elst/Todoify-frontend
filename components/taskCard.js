import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setHelper } from '../reducers/user'
import styles from '../styles/Card.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faTrash, faEdit, faMagnifyingGlass, faXmark, faCheck } from '@fortawesome/free-solid-svg-icons';

function taskCard(props) {

    const [showModal, setShowModal] = useState(false);
    const [modalEditName, setModalEditName] = useState(false);
    const [modalEditDescription, setModalEditDescription] = useState(false);
    const [modalEditPriority, setModalEditPriority] = useState(false);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("");
  
    const dispatch = useDispatch()

    const handleReplaceName = (name) => {
      fetch(`http://localhost:3000/tasks/updatename/${props.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({name}),
      }).then(response => response.json()).then(data => {
        setModalEditName(!modalEditName)
        dispatch(setHelper())
      })
    }
    const handleReplaceDescription = (description) => {
      fetch(`http://localhost:3000/tasks/updatedescription/${props.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({description}),
      }).then(response => response.json()).then(data => {    
        setModalEditDescription(!modalEditDescription)
        dispatch(setHelper())
      })
    }
    const handleReplacePriority = (priority) => {
      fetch(`http://localhost:3000/tasks/updatepriority/${props.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({priority}),
      }).then(response => response.json()).then(data => {
        setModalEditPriority(!modalEditPriority)
        dispatch(setHelper())
      })
    }


    const handleDeleteTask = () => {
      fetch(`http://localhost:3000/tasks/delete`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({id: props.id}),
      }).then(data => {
        dispatch(setHelper())
      })
    }



const colorForPriority = (priority) => {
    switch (priority) {
      case 1:
        return "rgb(122, 237, 28)";
      case 2:
        return "rgb(181, 237, 28)";
      case 3:
        return "rgb(232, 235, 56)";
      case 4:
        return "rgb(241, 136, 7)";
      case 5:
        return "rgb(251, 32, 32)";
      default:
        return "black";
    }
  }

  return (
    <div className={styles.container}>
        <div className={styles.top}>
            <FontAwesomeIcon icon={faUser} style={{color: '#5BC0BE', marginLeft: '10px'}}/>   
            <p className={styles.username}>{props.username}</p>  
            <div className={styles.priority} style={{backgroundColor: colorForPriority(props.priority)}}>
                {props.priority}
            </div> 
        </div>
        <div className={styles.mid}>   
            <p className={styles.taskname}>{props.taskname}</p>
        </div>
        <div className={styles.bot}>
            <div className={styles.iconSize} />
            <div className={styles.description}>
                <FontAwesomeIcon icon={faMagnifyingGlass} onClick={() => setShowModal(!showModal)} style={{color: '#5BC0BE'}} />  
            </div>
            <FontAwesomeIcon icon={faTrash} onClick={() => handleDeleteTask(props.id)} style={{color: '#5BC0BE', marginRight: "10px"}}/> 
        </div>  
        <div>
        {showModal && (
            <div className={styles.modal}>
                <div>
                <FontAwesomeIcon icon={faXmark} style={{color: '#5BC0BE', fontSize: "30px"}} onClick={() => setShowModal(!showModal)}/>  
                </div>
                <div>
                <h3 style={{color: '#5BC0BE'}}>Name</h3>
                    <div className={styles.bottom}>
                        {modalEditName? <input value={name} onChange={(e) => setName(e.target.value)} className={styles.editInput}/> : <p style={{color: 'white'}}>{props.taskname}</p> }
                        {modalEditName? 
                            <div>
                                <FontAwesomeIcon  onClick={() =>handleReplaceName(name) } icon={faCheck} style={{color: '#5BC0BE', fontSize: "30px"}} />:
                                <FontAwesomeIcon  onClick={() => setModalEditName(!modalEditName)} icon={faXmark} style={{color: '#5BC0BE', fontSize: "30px"}} /> 
                            </div>:
                            <FontAwesomeIcon icon={faEdit} style={{color: '#5BC0BE', marginLeft: '10px'}} onClick={() => setModalEditName(!modalEditName)}/>
                        }
                    </div>
               </div>
                <div>
                <h3 style={{color: '#5BC0BE'}}>Description</h3>
                    <div className={styles.bottom}>
                    {modalEditDescription? <input value={description} onChange={(e) => setDescription(e.target.value)} className={styles.editInput}/> : <p style={{color: 'white'}}>{props.description}</p> }
                    {modalEditDescription? 
                        <div>
                            <FontAwesomeIcon  onClick={() =>handleReplaceDescription(description)} icon={faCheck} style={{color: '#5BC0BE', fontSize: "30px"}} />:
                            <FontAwesomeIcon  onClick={() => setModalEditDescription(!modalEditDescription)} icon={faXmark} style={{color: '#5BC0BE', fontSize: "30px"}} /> 
                            </div>:
                        <FontAwesomeIcon icon={faEdit} style={{color: '#5BC0BE', marginLeft: '10px'}} onClick={() => setModalEditDescription(!modalEditDescription)}/>
                        }
                    </div>
                </div>
                <div>
                    <h3 style={{color: '#5BC0BE'}}>Priority</h3>
                    <div className={styles.bottom}>
                    {modalEditPriority? <input value={priority} onChange={(e) => setPriority(e.target.value)} className={styles.editInput}/> : <p style={{color: 'white'}}>{props.priority}</p> }
                    {modalEditPriority? 
                        <div>
                            <FontAwesomeIcon  onClick={() => handleReplacePriority(priority)} icon={faCheck} style={{color: '#5BC0BE', fontSize: "30px"}} />:
                            <FontAwesomeIcon  onClick={() => setModalEditPriority(!modalEditPriority)} icon={faXmark} style={{color: '#5BC0BE', fontSize: "30px"}} /> 
                        </div>:
                        <FontAwesomeIcon icon={faEdit} style={{color: '#5BC0BE', marginLeft: '10px'}} onClick={() => setModalEditPriority(!modalEditPriority)}/>
                    }
                    </div>
                </div>
            </div>
        )}   
        </div>   
               
    </div>
  )
}

export default taskCard