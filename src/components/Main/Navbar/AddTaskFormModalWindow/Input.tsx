import './Input.css';

type InputProps = {
  onInputTask: (e: any) => void;
};

const Input: React.FC<InputProps> = ({onInputTask}) => {
  return (
    <label className="titleInput">
      Title
      <input className="inputTask" onChange={onInputTask}></input>
    </label>
  );
};

export default Input;