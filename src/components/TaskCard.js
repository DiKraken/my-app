import React from 'react'
import classes from "./mainPage.module.css";

const TaskCard = (props) => {

    const handleDeleteTask = () => {
        return null //here will be logic about task deletion
    }

    return (
        <div className={classes.taskCard}>
            <div>{props.task.title}</div>
            <div>{props.task.description}</div>
            <div>{props.task.deadline.getFullYear()+'-'+(props.task.deadline.getMonth()+1)+'-'+props.task.deadline.getDate()}</div>
            <button onClick={handleDeleteTask}>X</button>
        </div>
    )
}

export default TaskCard