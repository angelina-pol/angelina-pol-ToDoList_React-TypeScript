import * as React from 'react';
import './RemoveTask.css';
import Trash from './Trash';
import store from '../../../../../stores/mainStore';

type RemoveTaskProps = {
  time: string;
}

const RemoveTask:  React.FC<RemoveTaskProps> = ({ time }) => {
  return (
    <button className="removeTaskButton" onClick={store.onRemoveTask} id={time}><Trash /></button>
  );
};

export default RemoveTask;