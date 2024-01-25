import * as React from 'react';
import './Main.css';
import './Navbar/Navbar.css';
import AddTaskButton from './Navbar/AddTaskButton';
import Selector from './Navbar/Selector';
import TaskNoFound from './Tasks/TaskNoFound';
import Task from './Tasks/Task';
import UpdateTaskForm from './UpdateTask/UpdateTaskForm';
import AddTaskForm from './Navbar/AddTaskFormModalWindow/AddTaskForm';

type MainProps = {

}

interface StateTask {
  task: string;
  time: string;
}

const Main: React.FC<MainProps> = () => {
  const [state, setState] = React.useState<StateTask[]>([]);
  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  const [isVisibleUpdate, setIsVisibleUpdate] = React.useState<boolean>(false);
  const [task, setTask] = React.useState<string>('');
  const [currentlyEditedTaskId, setCurrentlyEditedTaskId] = React.useState<string>('');

  const onAddTask = () => {
    const { DateTime } = require("luxon");
    const dt = DateTime.now();
    let newTime = dt.toLocaleString(DateTime.DATETIME_MED) + ':' + dt.second;
    let obj = {
      task: task,
      time: newTime,
    };
    setState([...state, obj]);
    setIsVisible(false);
  };

  const onInputTask = (e: any) => {
    setTask(e.target.value);
  };

  const onRemoveTask = (e: any) => {
    let newState = state.filter(obj => obj.time !== e.currentTarget.id);
    setState(newState);
  };

  const onEditEnd = () => {
    const { DateTime } = require("luxon");
    const dt = DateTime.now();
    let newTime = dt.toLocaleString(DateTime.DATETIME_MED) + ':' + dt.second;
    let arrWithElForChange = state.filter(obj => obj.time === currentlyEditedTaskId);
    let elForChange = {
      task: task,
      time: newTime,
    };
    let indexForChange = state.indexOf(arrWithElForChange[0]);
    state.splice(indexForChange, 1, elForChange);
    setState(state);
    setIsVisibleUpdate(false);
  };

  const onEditStart = (id: string) => {
    setIsVisibleUpdate(true);
    setCurrentlyEditedTaskId(id);
  };

  return (
    <div className="main">
      <div className="navbar">
        <AddTaskButton setIsVisible={setIsVisible} />
        <Selector className={"selector"} />
      </div>
      <div>
        {state.length === 0
        ? <TaskNoFound />
        : state.map((obj, i) => 
          <Task 
            key={i}
            textTask={obj.task}
            time={obj.time}
            onRemoveTask={onRemoveTask}
            onAddTask={onAddTask}
            onEditStart={onEditStart} 
          />)
        }
      </div>
      <AddTaskForm
        isVisible={isVisible}
        onClose={() => setIsVisible(false)}
        onAddTask={onAddTask}
        onInputTask={onInputTask} 
      />
      <UpdateTaskForm
        isVisibleUpdate={isVisibleUpdate}
        onClose={() => setIsVisibleUpdate(false)}
        onEditEnd={onEditEnd}
        onInputTask={onInputTask}
      />
    </div>
  );
};

export default Main;