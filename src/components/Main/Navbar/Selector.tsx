import './Selector.css';
import store from '../../../stores/mainStore';

type SelectorProps = {
  className: string;
};

const Selector: React.FC<SelectorProps> = ({ className }) => {
  return (
    <div>
      <select className={className} onChange={store.onDisplayTasks}>
        <option>All</option>
        <option>Incomplete</option>
        <option>Complete</option>
      </select>
    </div>
  );
};

export default Selector;