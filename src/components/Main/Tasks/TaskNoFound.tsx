import * as React from 'react';
import './TaskNoFound.css';

type TaskNoFoundProps = Record<string, never>;

const TaskNoFound:  React.FC<TaskNoFoundProps> = () => {
  return (
    <div className="taskNoFound">
      <div className="noTaskNoFound">No Todo Found</div>
    </div>
  );
};

export default TaskNoFound;