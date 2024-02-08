import * as React from 'react';
import './Task.css';
import EditTask from './ButtonForTask/EditTask/EditTask';
import RemoveTask from './ButtonForTask/RemoveTask/RemoveTask';

type TaskProps = {
  textTask: string;
  time: string;
  isCompleted: boolean;
  onChecked: (checked: boolean, id: string) => void;
};

const Task:  React.FC<TaskProps> = ({ textTask, time, isCompleted, onChecked }) => {
  const textTaskStyle = (): string => {
    return isCompleted ? "textTaskCompleted" : "textTaskIncompleted";
  };

  const isChecked = (): boolean => {
    return isCompleted;
  };

  const isCheckbox = (): string => {
    return isCompleted ? "checkboxNewCompleted" : "checkboxNewIncompleted";
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChecked(e.target.checked, time);
  };

  return (
    <div className="task">
      <div className="noTask">
        <div className="checkAndText">
          <label className="divCheckbox">
            <input 
              className="checkbox" 
              type="checkbox" 
              name="checkboxTask" 
              defaultChecked={isChecked()} 
              onChange={onChange}
            />
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
          <RemoveTask time={time} />
          <EditTask time={time} />
        </div>
      </div>
    </div>
  );
};

export default Task;