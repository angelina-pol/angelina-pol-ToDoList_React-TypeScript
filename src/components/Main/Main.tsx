import * as React from 'react';
import './Main.css'
import './Navbar/Navbar.css'
import AddTaskButton from './Navbar/AddTaskButton';
import Selector from './Navbar/Selector';
import TaskNoFound from './Tasks/TaskNoFound';
import Task from './Tasks/Task';

type MainProps = {

}

interface StateTask {
    task: string;
    time: string;
}

const Main:  React.FC<MainProps> = () => {
    const [state, setState] = React.useState<StateTask[]>([]);
    const [isVisible, setIsVisible] = React.useState<boolean>(false);
    const [task, setTask] = React.useState<string>('');
    const [time, setTime] = React.useState<string>('');

    const onAddTask = () => {
        let obj = {
            task: task,
            time: time,
        }
        setState([...state, obj]);
        setIsVisible(false);
    };

    const onInputTask = (e: any) => {
        const { DateTime } = require("luxon");
        const dt =  DateTime.now();
        let newTime = dt.toLocaleString(DateTime.DATETIME_MED) + ':' + dt.second;
        setTask(e.target.value);
        setTime(newTime.toString());
    }

    const onRemoveTask = (e: any) => {
        let newState = state.filter(obj => obj.time !== e.currentTarget.id);
        setState(newState);
    }

    return (
        <div className="main">
            <div className="navbar">
                <AddTaskButton 
                    onAddTask={onAddTask} 
                    isVisible={isVisible}
                    setIsVisible={setIsVisible}
                    onInputTask={onInputTask}
                />
                <Selector className={'selector'}/>
            </div>
            <div>
                {state.length === 0 
                    ? <TaskNoFound /> 
                    : state.map((obj, i) => <Task key={i} 
                                                textTask={obj.task} 
                                                time={obj.time} 
                                                onRemoveTask={onRemoveTask}
                                                onAddTask={onAddTask}
                                                onInputTask={onInputTask}
                                                isVisible={isVisible}
                                                setIsVisible={setIsVisible}/>)}
            </div>
        </div>
    )
}

export default Main;