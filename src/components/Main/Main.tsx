import * as React from 'react';
import './Main.css';
import './Navbar/Navbar.css';
import AddTaskButton from './Navbar/AddTaskButton';
import Selector from './Navbar/Selector';
import TaskNoFound from './Tasks/TaskNoFound';
import Task from './Tasks/Task';
import { observer } from 'mobx-react-lite';
import store from '../../stores/mainStore';
import ModalWindow from '../ModalWindow/ModalWindow';

type MainProps = {

};

const Main: React.FC<MainProps> = observer(() => {
  return (
    <div className="main">
      <div className="navbar">
        <AddTaskButton 
          onClick={() => store.isVisibleAddModal = true}
        />
        <Selector 
          className={"selector"} 
          onChange={store.onDisplayTasks}
        />
      </div>
      <div>
        {
          store.filteredTasks.length === 0
            ? <TaskNoFound />
            : store.filteredTasks.map((obj) => (
              <Task
                textTask={obj.task}
                id={obj.time}
                isCompleted={obj.isCompleted}
                onChecked={store.onChecked}
                removeOnClick={store.onRemoveTask}
                editOnClick={() => store.onEditStart}
                onEditStart={store.onEditStart}
              />
            ))
        }
      </div>
      <ModalWindow
        titleButton='Add Task'
        isVisibleModal={store.isVisibleAddModal}
        textTask=''
        onChangeInput={store.onInputTask}
        statusTask="Incomplete"
        onChangeStatus={store.onStatusTask}
        onClickAddTask={store.onAddTask}
        onClose={() => {store.isVisibleAddModal = false}}
      />
      <ModalWindow
        titleButton='Update Task'
        isVisibleModal={store.isVisibleUpdateModal}
        textTask={store.currentlyEditedTask()}
        onChangeInput={store.onInputTask}
        statusTask={store.currentlyEditedStatus()}
        onChangeStatus={store.onStatusTask}
        onClickAddTask={store.onEditEnd}
        onClose={() => {store.isVisibleUpdateModal = false}}
      />
    </div>
  );
});

export default Main;