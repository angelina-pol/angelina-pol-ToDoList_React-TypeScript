import * as React from 'react';
import './EditTask.css';
import Pencil from './Pencil';
import store from '../../../../../stores/mainStore';

type EditTaskProps = {
  time: string;
};

const EditTask:  React.FC<EditTaskProps> = ({ time, }) => {
  return (
    <>
      <button className="EditTaskButton" onClick={() => store.onEditStart(time)}><Pencil /></button>
    </>
  );
};

export default EditTask;