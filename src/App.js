import logo from './logo.svg';
import './App.css';
import MainPage from './components/MainPage'
import {TASK_TEST_LIST} from "./constants";
import {useState, useEffect} from "react";
import Bonuses from "./components/bonuses/Bonuses";

function App() {
    //auth
    // register
    // mainpage
    // task list
    // deadline
    // assign user
    // task info (name and description)
    // is task completed
    // edit tasks
    // create and delete tasks

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        setTimeout(() =>

            setTasks(TASK_TEST_LIST)
        )

    }, [])

    return (
        <div className="App">
            {/*<MainPage tasks={tasks}/>*/}
            <Bonuses/>
        </div>
    );
}

export default App;
