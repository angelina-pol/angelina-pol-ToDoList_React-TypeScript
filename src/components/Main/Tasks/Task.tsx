import * as React from 'react';
import './Task.css';
import EditTask from './ButtonForTask/EditTask/EditTask';
import RemoveTask from './ButtonForTask/RemoveTask/RemoveTask';
import { MouseEvent } from 'react';

type TaskProps = {
  textTask: string;
  id: string;
  isCompleted: boolean;
  onChecked: (checked: boolean, id: string) => void;
  removeOnClick: (e: MouseEvent<HTMLButtonElement>) => void;
  editOnClick: (id: string) => void;
  onEditStart: (id: string) => void;
};

const Task:  React.FC<TaskProps> = ({ 
  textTask, 
  id, 
  isCompleted, 
  onChecked, 
  removeOnClick, 
  editOnClick, 
  onEditStart }) => {
  const textTaskStyle = isCompleted ? "textTaskCompleted" : "textTaskIncompleted";
  const isChecked = isCompleted;
  const checkStyle = isCompleted ? "checkboxNewCompleted" : "checkboxNewIncompleted";

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChecked(e.target.checked, id);
  };

  const editOnClickFunc = () => {
    editOnClick(id)
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
              defaultChecked={isChecked} 
              onChange={onChange}
            />
            <span className={checkStyle}></span>
          </label>
          <div className='titleTask'>
            <div>
              <p className={textTaskStyle}>{textTask}</p>
              <p className="time">{id}</p>
            </div>
          </div>
        </div>
        <div>
          <RemoveTask 
            id={id} 
            removeOnClick={removeOnClick}
          />
          <EditTask 
            onClickOnEditStart={() => onEditStart(id)}
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Task);