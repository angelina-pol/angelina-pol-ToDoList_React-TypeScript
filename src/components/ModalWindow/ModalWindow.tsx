import * as React from 'react';
import './ModalWindow.css'
import Input from './Input';
import Status from './Status';
import { ChangeEvent } from 'react';

type ModalWindowProps = {
  titleButton: string;
  isVisibleModal: boolean;
  textTask?: string;
  statusTask?: string;
  onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeStatus: (e: ChangeEvent<HTMLSelectElement>) => void;
  onClickAddTask: () => void;
  onClose: () => void;
};

const ModalWindow: React.FC<ModalWindowProps> = ({
  titleButton,
  isVisibleModal,
  textTask,
  statusTask,
  onChangeInput, 
  onChangeStatus, 
  onClickAddTask, 
  onClose }) => {
  if (!isVisibleModal) {
    return null;
  }
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-dialog" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">{titleButton}</h3>
          <span className="modal-close" onClick={onClose}>
            &times;
          </span>
        </div>
        <div className="modal-body">
          <div className="modal-content">
            <div>
              <Input
                textTask={textTask}
                onChange={onChangeInput}
              />
              <Status
                statusTask={statusTask}
                onChange={onChangeStatus}
              />
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <div>
            <button className="addTaskButton" onClick={onClickAddTask}>{titleButton}</button>
            <button className="cancelButton" onClick={onClose}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;