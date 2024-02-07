import * as React from 'react';
import './Main.css';
import './Navbar/Navbar.css';
import AddTaskButton from './Navbar/AddTaskButton';
import Selector from './Navbar/Selector';
import TaskNoFound from './Tasks/TaskNoFound';
import Task from './Tasks/Task';
import UpdateTaskForm from './UpdateTask/UpdateTaskForm';
import AddTaskForm from './Navbar/AddTaskFormModalWindow/AddTaskForm';
import { ChangeEvent, MouseEvent } from 'react';
import { observer } from 'mobx-react-lite';
import store from '../../stores/mainStore';

type MainProps = {

}
interface StateTask {
  task: string;
  time: string;
  isCompleted: boolean; 
}

const Main: React.FC<MainProps> = observer(() => {
  const [currentlyEditedTaskId, setCurrentlyEditedTaskId] = React.useState<string>('');
  const [isCompletedTask, setIsCompletedTask] = React.useState<boolean>(false);
  const [displayTasks, setDisplayTasks] = React.useState<'All' | 'Incomplete' | 'Complete'>('All');  

  const currentlyObj = store.tasks.find(el => el.time === currentlyEditedTaskId);
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
    const obj = {
      task: store.task,
      time: timeAddTask(),
      isCompleted: isCompletedTask,
    };
    store.tasks.push(obj);
    store.isVisibleAddModal = false;
    setIsCompletedTask(false);
  };

  const onInputTask = (e: ChangeEvent<HTMLInputElement>) => {
    store.task = e.target.value;
  };
  
  const onStatusTask = (e: ChangeEvent<HTMLSelectElement>) => {
    setIsCompletedTask(
      e.target.value === "Complete" 
      ? true
      : false
    );
  };

  const onRemoveTask = (e: MouseEvent<HTMLButtonElement>) => {
    store.tasks.filter(obj => obj.time !== e.currentTarget.id);
  };

  const onEditEnd = () => {
    const editedTask = store.tasks.filter(obj => obj.time === currentlyEditedTaskId)[0];
    const indexForChange = store.tasks.indexOf(editedTask);
    store.tasks.splice(indexForChange, 1, { task: store.task, time: currentlyEditedTaskId, isCompleted: isCompletedTask });
    store.isVisibleUpdateModal = false;
    setIsCompletedTask(false);
  };

  const onEditStart = (id: string) => {
    store.isVisibleUpdateModal = true;
    setCurrentlyEditedTaskId(id);
  };

  const onDisplayTasks = (e: ChangeEvent<HTMLSelectElement> ) => {
    setDisplayTasks(e.target.value as "All" | "Incomplete" | "Complete");
  };

  const onChecked = (e: ChangeEvent<HTMLInputElement>, id: string) => {
    const editedTask = store.tasks.filter(obj => obj.time === id)[0];
    const indexForChange = store.tasks.indexOf(editedTask);
    store.tasks.splice(indexForChange, 1, { ...editedTask, isCompleted: e.target.checked });
  }

  const filterTasks = (el: any) => {
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
        <AddTaskButton />
        <Selector 
          className={"selector"} 
          onDisplayTasks={onDisplayTasks}
        />
      </div>
      <div>
        {
        store.tasks.length === 0
        ? <TaskNoFound />
        : store.tasks
          .filter(filterTasks)
          .map((obj, i) => 
            <Task 
              textTask={obj.task}
              time={obj.time}
              isCompleted={obj.isCompleted}
              onRemoveTask={onRemoveTask}
              onEditStart={onEditStart} 
              onChecked={onChecked}
            />
          )
        }
      </div>
      <AddTaskForm
        onAddTask={onAddTask}
        onInputTask={onInputTask} 
        onStatusTask={onStatusTask}
      />
      <UpdateTaskForm
        onEditEnd={onEditEnd}
        onInputTask={onInputTask}
        onStatusTask={onStatusTask}
        textTask={currentlyEditedTask}
        statusTask={currentlyEditedStatus}
      />
    </div>
  );
});

export default Main;