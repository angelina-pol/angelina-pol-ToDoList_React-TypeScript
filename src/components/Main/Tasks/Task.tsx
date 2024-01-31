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
  onChecked: (e: any, id: string) => void;
};

const Task:  React.FC<TaskProps> = ({ textTask, time, isCompleted, onRemoveTask, onEditStart, onChecked }) => {
  const textTaskStyle = (): string => {
    return isCompleted ? "textTaskCompleted" : "textTaskIncompleted";
  };

  const isChecked = (): boolean => {
    return isCompleted;
  };

  const isCheckbox = (): string => {
    return isCompleted ? "checkboxNewCompleted" : "checkboxNewIncompleted"
  }

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
              onChange={(event) => onChecked(event, time)}
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