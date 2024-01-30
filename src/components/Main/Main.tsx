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
  isCompleted: boolean; 
}

const Main: React.FC<MainProps> = () => {
  const [state, setState] = React.useState<StateTask[]>([]);
  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  const [isVisibleUpdate, setIsVisibleUpdate] = React.useState<boolean>(false);
  const [task, setTask] = React.useState<string>('');
  const [currentlyEditedTaskId, setCurrentlyEditedTaskId] = React.useState<string>('');
  const [isCompletedTask, setIsCompletedTask] = React.useState<boolean>(false);
  const [displayTasks, setDisplayTasks] = React.useState<'All' | 'Incomplete' | 'Complete'>('All');  

  let currentlyObj: StateTask | undefined = state.find(el => el.time === currentlyEditedTaskId);
  let currentlyEditedTask;
  let currentlyEditedStatusBoolean;
  let currentlyEditedStatus;
  if (typeof(currentlyObj) === 'object') {
    currentlyEditedTask = currentlyObj.task;
    currentlyEditedStatusBoolean = currentlyObj.isCompleted;
    currentlyEditedStatusBoolean ? currentlyEditedStatus = "Complete" : currentlyEditedStatus = "Incomplete";
  };

  const timeAddTask = () => {
    const { DateTime } = require("luxon");
    const dt = DateTime.now();
    return dt.toLocaleString(DateTime.DATETIME_MED) + ':' + dt.second;
  };

  const onAddTask = () => {
    let obj = {
      task: task,
      time: timeAddTask(),
      isCompleted: isCompletedTask,
    };
    setState([...state, obj]);
    setIsVisible(false);
    setIsCompletedTask(false);
  };

  const onInputTask = (e: any) => {
    setTask(e.target.value);
  };
  
  const onStatusTask = (e: any) => {
    setIsCompletedTask(
      e.target.value === "Complete" 
      ? true
      : false
    );
  };

  const onRemoveTask = (e: any) => {
    let newState = state.filter(obj => obj.time !== e.currentTarget.id);
    setState(newState);
  };

  const onEditEnd = () => {
    let arrWithElForChange = state.filter(obj => obj.time === currentlyEditedTaskId);
    let elForChange = {
      task: task,
      time: currentlyEditedTaskId,
      isCompleted: isCompletedTask,
    };
    let indexForChange = state.indexOf(arrWithElForChange[0]);
    state.splice(indexForChange, 1, elForChange);
    setState(state);
    setIsVisibleUpdate(false);
    setIsCompletedTask(false);
  };

  const onEditStart = (id: string) => {
    setIsVisibleUpdate(true);
    setCurrentlyEditedTaskId(id);
  };

  const onDisplayTasks = (e: any) => {
    setDisplayTasks(e.target.value);
  };

  const filterTasks = (el: StateTask) => {
    if (displayTasks === 'Incomplete') {
      return !el.isCompleted;
    };
    if (displayTasks === 'Complete') {
      return el.isCompleted;
    };
    return true;
  };

  return (
    <div className="main">
      <div className="navbar">
        <AddTaskButton setIsVisible={setIsVisible} />
        <Selector 
          className={"selector"} 
          onDisplayTasks={onDisplayTasks}
        />
      </div>
      <div>
        {
        state.length === 0
        ? <TaskNoFound />
        : state
          .filter(filterTasks)
          .map((obj, i) => 
            <Task 
              textTask={obj.task}
              time={obj.time}
              isCompleted={obj.isCompleted}
              onRemoveTask={onRemoveTask}
              onEditStart={onEditStart} 
            />
          )
        }
      </div>
      <AddTaskForm
        isVisible={isVisible}
        onClose={() => setIsVisible(false)}
        onAddTask={onAddTask}
        onInputTask={onInputTask} 
        onStatusTask={onStatusTask}
      />
      <UpdateTaskForm
        isVisibleUpdate={isVisibleUpdate}
        onClose={() => setIsVisibleUpdate(false)}
        onEditEnd={onEditEnd}
        onInputTask={onInputTask}
        onStatusTask={onStatusTask}
        textTask={currentlyEditedTask}
        statusTask={currentlyEditedStatus}
      />
    </div>
  );
};

export default Main;