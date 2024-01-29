import * as React from 'react';
import './UpdateTaskForm.css';
import Input from '../Navbar/AddTaskFormModalWindow/Input';
import Status from '../Navbar/AddTaskFormModalWindow/Status';

type UpdateTaskFormProps = {
  isVisibleUpdate: boolean;
  onClose: any;
  onEditEnd: (e: any) => void;
  onInputTask: (e: any) => void;
  onStatusTask: (e: any) => void;
};

const UpdateTaskForm: React.FC<UpdateTaskFormProps> = ({ isVisibleUpdate = false, onClose, onEditEnd, onInputTask, onStatusTask }) => {
  return (!isVisibleUpdate) ? null : (
    <div className="modal" onClick={onClose}>
      <div className="modal-dialog" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">Update Task</h3>
          <span className="modal-close" onClick={onClose}>
            &times;
          </span>
        </div>
        <div className="modal-body">
          <div className="modal-content">
            <div>
              <Input onInputTask={onInputTask}/>
              <Status onStatusTask={onStatusTask}/>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <div>
            <button className="updateTaskButton" onClick={onEditEnd}>Update Task</button>
            <button className="cancelButton" onClick={onClose}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateTaskForm;