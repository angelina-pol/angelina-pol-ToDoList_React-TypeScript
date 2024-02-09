import * as React from 'react';
import './EditTask.css';
import Pencil from './Pencil';
import store from '../../../../../stores/mainStore';
import { observer } from 'mobx-react-lite';

type EditTaskProps = {
  onClickOnEditStart: () => void;
};

const EditTask:  React.FC<EditTaskProps> = observer(({ onClickOnEditStart }) => {
  return (
    <>
      <button className="EditTaskButton" onClick={onClickOnEditStart}><Pencil /></button>
    </>
  );
});

export default EditTask;