import * as React from 'react';
import './Main.css';
import './Navbar/Navbar.css';
import AddTaskButton from './Navbar/AddTaskButton';
import Selector from './Navbar/Selector';
import TaskNoFound from './Tasks/TaskNoFound';
import Task from './Tasks/Task';
import UpdateTaskForm from './UpdateTask/UpdateTaskForm';
import AddTaskForm from './Navbar/AddTaskFormModalWindow/AddTaskForm';
import { observer } from 'mobx-react-lite';
import store from '../../stores/mainStore';

type MainProps = {

};

const Main: React.FC<MainProps> = observer(() => {
  return (
    <div className="main">
      <div className="navbar">
        <AddTaskButton />
        <Selector className={"selector"} />
      </div>
      <div>
        {
          store.filteredTasks.length === 0
            ? <TaskNoFound />
            : store.filteredTasks.map((obj) => (
              <Task
                textTask={obj.task}
                time={obj.time}
                isCompleted={obj.isCompleted}
                onChecked={store.onChecked}
              />
            ))
        }
      </div>
      <AddTaskForm />
      <UpdateTaskForm />
    </div>
  );
});

export default Main;