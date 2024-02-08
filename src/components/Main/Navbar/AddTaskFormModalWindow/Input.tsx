import './Input.css';
import store from '../../../../stores/mainStore';

type InputProps = {
  textTask: string | undefined;
};

const Input: React.FC<InputProps> = ({ textTask }) => {
  return (
    <label className="titleInput">
      Title
      <input className="inputTask" onChange={store.onInputTask} defaultValue={textTask}></input>
    </label>
  );
};

export default Input;