import * as React from 'react';
import './AddTaskButton.css';

type AddTaskButtonProps = {
  setIsVisible: (val: boolean) => void;
};

const AddTaskButton: React.FC<AddTaskButtonProps> = ({setIsVisible}) => {
  return (
    <>
      <div>
        <button className="button" onClick={() => setIsVisible(true)}>Add Task</button>
      </div>
    </>
  );
};

export default AddTaskButton;