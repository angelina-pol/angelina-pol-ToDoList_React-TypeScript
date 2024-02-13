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

type MainProps = Record<string, never>; // { [key: string]: never }

const Main: React.FC<MainProps> = () => {
  const [isVisibleAddModal, setIsVisibleAddModal] = React.useState(false);
  const [isVisibleUpdateModal, setIsVisibleUpdateModal] = React.useState(false);

  const onAddTaskClink = React.useCallback(() => {
    store.onAddTask();
    setIsVisibleAddModal(false);
  }, []);

  const onEditStartClick = React.useCallback((id: string) => {
    store.onEditStart(id);
    setIsVisibleUpdateModal(true);
  }, []);

  const onEditEndClick = React.useCallback(() => {
    store.onEditEnd();
    setIsVisibleUpdateModal(false);
  }, []);

  return (
    <div className="main">
      <div className="navbar">
        <AddTaskButton
          onClick={() => setIsVisibleAddModal(true)}
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
                editOnClick={() => onEditStartClick}
                onEditStart={onEditStartClick}
              />
            ))
        }
      </div>
      <ModalWindow
        titleButton='Add Task'
        isVisibleModal={isVisibleAddModal}
        textTask=''
        onChangeInput={store.onInputTask}
        statusTask="Incomplete"
        onChangeStatus={store.onStatusTask}
        onClickAddTask={onAddTaskClink}
        onClose={() => setIsVisibleAddModal(true)}
      />
      <ModalWindow
        titleButton='Update Task'
        isVisibleModal={isVisibleUpdateModal}
        textTask={store.currentlyEditedTask()}
        onChangeInput={store.onInputTask}
        statusTask={store.currentlyEditedStatus()}
        onChangeStatus={store.onStatusTask}
        onClickAddTask={onEditEndClick}
        onClose={() => setIsVisibleUpdateModal(false)}
      />
    </div>
  );
};

export default observer(Main);