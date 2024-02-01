import * as React from 'react';
import './RemoveTask.css';
import Trash from './Trash';
import { MouseEvent } from 'react';

type RemoveTaskProps = {
  onRemoveTask: (e: MouseEvent<HTMLButtonElement>) => void;
  time: string;
}

const RemoveTask:  React.FC<RemoveTaskProps> = ({ onRemoveTask, time }) => {
  return (
    <button className="removeTaskButton" onClick={onRemoveTask} id={time}><Trash /></button>
  );
};

export default RemoveTask;