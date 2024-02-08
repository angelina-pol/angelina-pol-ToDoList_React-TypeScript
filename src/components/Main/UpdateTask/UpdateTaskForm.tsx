import * as React from 'react';
import './UpdateTaskForm.css';
import Input from '../Navbar/AddTaskFormModalWindow/Input';
import Status from '../Navbar/AddTaskFormModalWindow/Status';
import store from '../../../stores/mainStore';
import { observer } from 'mobx-react-lite';

type UpdateTaskFormProps = {

};

const UpdateTaskForm: React.FC<UpdateTaskFormProps> = observer(() => {
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
                textTask={store.currentlyEditedTask()} 
                onChange={store.onInputTask}
              />
              <Status 
                statusTask={store.currentlyEditedStatus()} 
                onChange={store.onStatusTask}
              />
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <div>
            <button className="updateTaskButton" onClick={store.onEditEnd}>Update Task</button>
            <button className="cancelButton" onClick={() => store.isVisibleAddModal = false}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default UpdateTaskForm;