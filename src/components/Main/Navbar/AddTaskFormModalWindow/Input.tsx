import './Input.css';

type InputProps = {
  onInputTask: (e: any) => void;
  textTask: string;
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