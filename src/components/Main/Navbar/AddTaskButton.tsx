import * as React from 'react';
import './AddTaskButton.css';
import { observer } from 'mobx-react-lite';

type AddTaskButtonProps = {
  onClick: () => void;
};

const AddTaskButton: React.FC<AddTaskButtonProps> = observer(({ onClick }) => {
  return (
    <>
      <div>
        <button className="button" onClick={onClick}>Add Task</button>
      </div>
    </>
  );
});

export default AddTaskButton;