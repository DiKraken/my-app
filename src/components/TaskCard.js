import React from 'react'
import classes from "./mainPage.module.css";

const TaskCard = (props) => {
    return (
        <div className={classes.taskCard}>
            <div>{props.task.title}</div>
            <div>{props.task.description}</div>
            <div>{props.task.deadline.getFullYear()+'-'+(props.task.deadline.getMonth()+1)+'-'+props.task.deadline.getDate()}</div>
        </div>
    )
}

export default TaskCard