import React, {useState} from 'react';
import classes from './mainPage.module.css'
import TaskCard from "./TaskCard";
import {observer} from "mobx-react-lite";
import {TasksState} from "../store/tasks";


const MainPage = observer(() => {

    const [taskTitle, setTaskTitle] = useState()
    const [taskDescription, setTaskDescription] = useState()

    const handleChangeTitle = (e) => {
        setTaskTitle(e.target.value)
    }

    const handleChangeDescription = (e) => {
        setTaskDescription(e.target.value)
    }

    const handleSubmitNewTask = () => {
        return null // here will be logic about new task creation (api request)
    }

    return (
        <div className={classes.mainPageWrapper}>
            <div style={{ display: 'flex', flexDirection: "column", alignItems: "center", margin: '0 auto'}}>

                <input
                    placeholder="Title"
                    value={taskTitle}
                    onChange={handleChangeTitle}
                />
                <input
                    placeholder="Description"
                    value={taskDescription}
                    onChange={handleChangeDescription}
                />
                <button onClick={handleSubmitNewTask}>Create Task</button>

            </div>
            {TasksState.tasks.map(task => <TaskCard task={task} key={task.id}/>)}
        </div>
    )
})

export default MainPage