import * as React from 'react';
import './Task.css';
import EditTask from './ButtonForTask/EditTask/EditTask';
import RemoveTask from './ButtonForTask/RemoveTask/RemoveTask';

type TaskProps = {
  textTask: string;
  time: any;
  isCompleted: boolean;
  onRemoveTask: (e: any) => void;
  onEditStart: (id: string) => void;
};

const Task:  React.FC<TaskProps> = ({ textTask, time, isCompleted, onRemoveTask, onEditStart }) => {
  const textTaskStyle = (): string => {
    return isCompleted ? "textTaskCompleted" : "textTaskIncompleted";
  };

  const isChecked = (): boolean => {
    return isCompleted ? true : false;
  };

  const isCheckbox = (): string => {
    return isCompleted ? "checkboxNewCompleted" : "checkboxNewIncompleted"
  }

  return (
    <div className="task">
      <div className="noTask">
        <div className="checkAndText">
          <label className="divCheckbox">
            <input className="checkbox" type="checkbox" name="checkboxTask" checked={isChecked()}/>
            <span className={isCheckbox()}></span>
          </label>
          <div className='titleTask'>
            <div>
              <p className={textTaskStyle()}>{textTask}</p>
              <p className="time">{time}</p>
            </div>
          </div>
        </div>
        <div>
          <RemoveTask 
            onRemoveTask={onRemoveTask} 
            time={time}
          />
          <EditTask 
            onEditStart={onEditStart} 
            time={time}
          />
        </div>
      </div>
    </div>
  );
};

export default Task;