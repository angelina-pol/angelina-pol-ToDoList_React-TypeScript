import * as React from 'react';
import './AddTaskForm.css'
import Input from './Input';
import Status from './Status';
import { ChangeEvent } from 'react';
import store from '../../../../stores/mainStore';
import { observer } from 'mobx-react-lite';

type AddTaskFormProps = {
  onAddTask: () => void;
  onInputTask: (e: ChangeEvent<HTMLInputElement>) => void;
  onStatusTask: (e: ChangeEvent<HTMLSelectElement>) => void;
};

const AddTaskForm: React.FC<AddTaskFormProps> = observer(({ onAddTask, onInputTask, onStatusTask }) => {
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
            <button className="cancelButton" onClick={() => store.isVisibleAddModal = false}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default AddTaskForm;