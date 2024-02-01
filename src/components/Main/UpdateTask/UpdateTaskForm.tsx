import * as React from 'react';
import './UpdateTaskForm.css';
import Input from '../Navbar/AddTaskFormModalWindow/Input';
import Status from '../Navbar/AddTaskFormModalWindow/Status';
import { ChangeEvent } from 'react';

type UpdateTaskFormProps = {
  isVisibleUpdate: boolean;
  onClose: () => void;
  onEditEnd: () => void;
  onInputTask: (e: ChangeEvent<HTMLInputElement>) => void;
  onStatusTask: (e: ChangeEvent<HTMLSelectElement>) => void;
  textTask: string | undefined;
  statusTask: string | undefined;
};

const UpdateTaskForm: React.FC<UpdateTaskFormProps> = ({ isVisibleUpdate = false, onClose, onEditEnd, onInputTask, onStatusTask, textTask, statusTask }) => {
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
              <Input 
                onInputTask={onInputTask}
                textTask={textTask}
              />
              <Status 
                onStatusTask={onStatusTask}
                statusTask={statusTask}
              />
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