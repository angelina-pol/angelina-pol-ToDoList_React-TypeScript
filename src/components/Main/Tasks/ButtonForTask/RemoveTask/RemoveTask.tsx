import * as React from 'react';
import './RemoveTask.css';
import Trash from './Trash';
import { MouseEvent } from 'react';

type RemoveTaskProps = {
  id: string;
  removeOnClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

const RemoveTask:  React.FC<RemoveTaskProps> = ({ id, removeOnClick }) => {
  return (
    <button className="removeTaskButton" onClick={removeOnClick} id={id}><Trash /></button>
  );
};

export default RemoveTask;