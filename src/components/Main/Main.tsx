import * as React from 'react';
import { useState } from 'react';
import './Main.css'
import './Navbar/Navbar.css'
import AddTaskButton from './Navbar/AddTaskButton';
import Selector from './Navbar/Selector';
import Task from './Tasks/Task';

type MainProps = {

}

const Main:  React.FC<MainProps> = () => {
    const [state, setState] = useState([<Task />]);
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [title, setTitle] = React.useState('');

    const onAddTask = (title: any) => {
        let newTask = <Task />
        setState(oldTasks => [...oldTasks, newTask]);
        setIsVisible(false);
    };

    return (
        <div className="main">
            <div className="navbar">
                <AddTaskButton 
                    onAddTask={onAddTask} 
                    isVisible={isVisible}
                    setIsVisible={setIsVisible}
                />
                <Selector className={'selector'}/>
            </div>
            <div>
                {state}
            </div>
        </div>
    )
}

export default Main;