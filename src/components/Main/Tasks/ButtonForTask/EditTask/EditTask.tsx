import * as React from 'react';
import './EditTask.css';
import Pencil from './Pencil';

type EditTaskProps = {
  onClickOnEditStart: () => void;
};

const EditTask:  React.FC<EditTaskProps> = ({ onClickOnEditStart }) => {
  return (
    <>
      <button className="EditTaskButton" onClick={onClickOnEditStart}><Pencil /></button>
    </>
  );
};

export default EditTask;