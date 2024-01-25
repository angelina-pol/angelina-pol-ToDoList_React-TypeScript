import * as React from 'react';
import './Task.css';
import EditTask from './ButtonForTask/EditTask/EditTask';
import RemoveTask from './ButtonForTask/RemoveTask/RemoveTask';

type TaskProps = {
  textTask: string;
  time: any;
  onRemoveTask: (e: any) => void;
  onAddTask: (e: any) => void;
  onEditStart: (id: string) => void;
};

const Task:  React.FC<TaskProps> = ({textTask, time, onRemoveTask, onEditStart}) => {
  return (
    <div className="task">
      <div className="noTask">
        <div className="checkAndText">
          <div className="divCheckbox">
            <input className="checkbox" type="checkbox" name="checkboxTask" />
          </div>
          <div>
            <p className="textTask">{textTask}</p>
            <p className="time">{time}</p>
          </div>
        </div>
        <div>
          <RemoveTask onRemoveTask={onRemoveTask} time={time}/>
          <EditTask onEditStart={onEditStart} time={time}/>
        </div>
      </div>
    </div>
  );
};

export default Task;