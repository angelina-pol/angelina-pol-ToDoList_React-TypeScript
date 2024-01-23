import * as React from 'react';
import './RemoveTask.css';
import Trash from './Trash';

type RemoveTaskProps = {
  onRemoveTask: (e: any) => void;
  time: any;
}

const RemoveTask:  React.FC<RemoveTaskProps> = ({ onRemoveTask, time }) => {
    return (
      <button className="removeTaskButton" onClick={onRemoveTask} id={time}><Trash /></button>
    )
}

export default RemoveTask;