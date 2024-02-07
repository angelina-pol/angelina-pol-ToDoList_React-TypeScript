import * as React from 'react';
import './UpdateTaskForm.css';
import Input from '../Navbar/AddTaskFormModalWindow/Input';
import Status from '../Navbar/AddTaskFormModalWindow/Status';
import { ChangeEvent } from 'react';
import store from '../../../stores/mainStore';
import { observer } from 'mobx-react-lite';

type UpdateTaskFormProps = {
  onEditEnd: () => void;
  onInputTask: (e: ChangeEvent<HTMLInputElement>) => void;
  onStatusTask: (e: ChangeEvent<HTMLSelectElement>) => void;
  textTask: string | undefined;
  statusTask: string | undefined;
};

const UpdateTaskForm: React.FC<UpdateTaskFormProps> = observer(({ onEditEnd, onInputTask, onStatusTask, textTask, statusTask }) => {
  const onClick = () => {
    store.isVisibleUpdateModal = false;
  }
  return (!store.isVisibleUpdateModal) ? null : (
    <div className="modal" onClick={onClick}>
      <div className="modal-dialog" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">Update Task</h3>
          <span className="modal-close" onClick={onClick}>
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
            <button className="cancelButton" onClick={() => store.isVisibleAddModal = false}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default UpdateTaskForm;