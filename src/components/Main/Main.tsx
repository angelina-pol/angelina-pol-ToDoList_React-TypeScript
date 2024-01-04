import * as React from 'react';
import './Main.css'
import './Navbar/Navbar.css'
import AddTaskButton from './Navbar/AddTaskButton';
import Selector from './Navbar/Selector';
import Task from './Tasks/Task';

const Main = () => {
    return (
        <div className="main">
            <div className="navbar">
                <AddTaskButton />
                <Selector className={'selector'}/>
            </div>
            <div>
                <Task />
            </div>
        </div>
    )
}

export default Main;