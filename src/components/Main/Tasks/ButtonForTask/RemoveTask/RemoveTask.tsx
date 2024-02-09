import * as React from 'react';
import './RemoveTask.css';
import Trash from './Trash';
import { MouseEvent } from 'react';
import { observer } from 'mobx-react-lite';

type RemoveTaskProps = {
  id: string;
  removeOnClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

const RemoveTask:  React.FC<RemoveTaskProps> = observer(({ id, removeOnClick }) => {
  return (
    <button className="removeTaskButton" onClick={removeOnClick} id={id}><Trash /></button>
  );
});

export default RemoveTask;