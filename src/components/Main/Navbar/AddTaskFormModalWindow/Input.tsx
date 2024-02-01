import './Input.css';
import { ChangeEvent } from 'react';

type InputProps = {
  onInputTask: (e: ChangeEvent<HTMLInputElement>) => void;
  textTask: string | undefined;
};

const Input: React.FC<InputProps> = ({ onInputTask, textTask }) => {
  return (
    <label className="titleInput">
      Title
      <input className="inputTask" onChange={onInputTask} defaultValue={textTask}></input>
    </label>
  );
};

export default Input;