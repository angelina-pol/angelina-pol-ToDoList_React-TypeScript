import * as React from 'react';
import './AddTaskForm.css'
import Input from './Input';
import Status from './Status';
import { ChangeEvent } from 'react';

type AddTaskFormProps = {
  isVisible: boolean;
  onClose: () => void; 
  onAddTask: () => void;
  onInputTask: (e: ChangeEvent<HTMLInputElement>) => void;
  onStatusTask: (e: ChangeEvent<HTMLSelectElement>) => void;
};

const AddTaskForm: React.FC<AddTaskFormProps> = ({ isVisible = false, onClose, onAddTask, onInputTask, onStatusTask }) => {
  const onClick = () => {
    onClose();
  }
  return (!isVisible) ? null : (
    <div className="modal" onClick={onClick}>
      <div className="modal-dialog" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">Add Task</h3>
          <span className="modal-close" onClick={onClick}>
            &times;
          </span>
        </div>
        <div className="modal-body">
          <div className="modal-content">
            <div>
              <Input 
                onInputTask={onInputTask} 
                textTask={""}
              />
              <Status 
                onStatusTask={onStatusTask}
                statusTask={"Incomplete"}
              />
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <div>
            <button className="addTaskButton" onClick={onAddTask}>Add Task</button>
            <button className="cancelButton" onClick={onClose}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTaskForm;