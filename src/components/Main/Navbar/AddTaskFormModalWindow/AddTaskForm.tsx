import * as React from 'react';
import './AddTaskForm.css'
import Input from './Input';
import Status from './Status';
import store from '../../../../stores/mainStore';
import { observer } from 'mobx-react-lite';

type AddTaskFormProps = {

};

const AddTaskForm: React.FC<AddTaskFormProps> = observer(() => {
  const onClick = () => {
    store.isVisibleAddModal = false;
  }
  return (!store.isVisibleAddModal) ? null : (
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
                textTask={""}
                onChange={store.onInputTask}
              />
              <Status 
                statusTask={"Incomplete"}
                onChange={store.onStatusTask}
              />
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <div>
            <button className="addTaskButton" onClick={store.onAddTask}>Add Task</button>
            <button className="cancelButton" onClick={() => store.isVisibleAddModal = false}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default AddTaskForm;