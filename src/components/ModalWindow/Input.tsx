import './Input.css';
import { ChangeEvent } from 'react';

type InputProps = {
  textTask: string | undefined;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = ({ textTask, onChange }) => {
  return (
    <label className="titleInput">
      Title
      <input className="inputTask" onChange={onChange} defaultValue={textTask}></input>
    </label>
  );
};

export default Input;