import React from 'react';
import classes from './mainPage.module.css'
import TaskCard from "./TaskCard";


const MainPage = (props) => {
    return (
        <div className={classes.mainPageWrapper}>
            {props.tasks.map(task => <TaskCard task={task} key={task.id}/>)}
        </div>
    )
}

export default MainPage