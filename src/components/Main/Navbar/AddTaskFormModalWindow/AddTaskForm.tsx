import * as React from 'react';
import './AddTaskForm.css'
import Input from './Input';
import Status from './Status';

type AddTaskFormProps = {
  isVisible: boolean;
  onClose: any;
  onAddTask: (e: any) => void;
  onInputTask: (e: any) => void;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({ isVisible = false, onClose, onAddTask, onInputTask}) => {

  return (!isVisible) ? null : (
    <div className="modal" onClick={onClose}>
      <div className="modal-dialog" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">Add Task</h3>
          <span className="modal-close" onClick={onClose}>
            &times;
          </span>
        </div>
        <div className="modal-body">
          <div className="modal-content">{<div>
            <Input onInputTask={onInputTask}/>
            <Status />
          </div>}</div>
        </div>
        {<div className="modal-footer">{<div>
          <button className='addTaskButton' onClick={onAddTask}>Add Task</button>
          <button className='cancelButton' onClick={onClose}>Cancel</button>
        </div>}</div>}
      </div>
    </div>
  );
}

export default AddTaskForm;