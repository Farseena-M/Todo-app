import React, { useEffect, useState } from 'react'
import './Todo App/Todo.css'
import AddTask from './Todo App/AddTask'
import ListTask from './Todo App/ListTask'
function Todo() {
    const [tasks,setTasks] = useState([])
    useEffect(()=>{
        document.title=`You have ${tasks.length} pending task`
    })
   const addTask=(title)=>{
      const newTask=[...tasks,{title}]
      setTasks(newTask)
    }
    const removeTask=(index)=>{
        const newTask=[...tasks]
        newTask.splice(index,1)
        setTasks(newTask)
    }
  return (
    <>
    <div className='todo-container'>
        <div className='header'>Todo App</div>
        <div className='add-task'><AddTask addTask={addTask}/></div>
        <div className='tasks'>{tasks.map((task,index)=>(<ListTask task={task} removeTask={removeTask} index={index} key={index}/>))}</div>
    </div>
    </>
  
  )
}

export default Todo