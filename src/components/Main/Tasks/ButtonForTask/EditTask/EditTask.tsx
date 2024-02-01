import * as React from 'react';
import './EditTask.css';
import Pencil from './Pencil';

type EditTaskProps = {
  time: string;
  onEditStart: (id: string) => void;
};

const EditTask:  React.FC<EditTaskProps> = ({ time, onEditStart }) => {
  return (
    <>
      <button className="EditTaskButton" onClick={() => onEditStart(time)}><Pencil /></button>
    </>
  );
};

export default EditTask;