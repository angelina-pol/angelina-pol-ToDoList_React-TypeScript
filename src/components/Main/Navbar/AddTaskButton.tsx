import * as React from 'react';
import './AddTaskButton.css';

type AddTaskButtonProps = {
  onClick: () => void;
};

const AddTaskButton: React.FC<AddTaskButtonProps> = ({ onClick }) => {
  return (
    <div>
      <button className="button" onClick={onClick}>Add Task</button>
    </div>
  );
};

export default AddTaskButton;