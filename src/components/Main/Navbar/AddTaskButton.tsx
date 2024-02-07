import * as React from 'react';
import './AddTaskButton.css';
import { observer } from 'mobx-react-lite';
import store from '../../../stores/mainStore';

type AddTaskButtonProps = {
  
};

const AddTaskButton: React.FC<AddTaskButtonProps> = observer(() => {
  return (
    <>
      <div>
        <button className="button" onClick={() => store.isVisibleAddModal = true}>Add Task</button>
      </div>
    </>
  );
});

export default AddTaskButton;