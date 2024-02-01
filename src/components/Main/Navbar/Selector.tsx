import './Selector.css';
import { ChangeEvent } from 'react';

type SelectorProps = {
  onDisplayTasks: (e: ChangeEvent<HTMLSelectElement> ) => void;
  className: string;
};

const Selector: React.FC<SelectorProps> = ({ onDisplayTasks, className }) => {
  return (
    <div>
      <select className={className} onChange={onDisplayTasks}>
        <option>All</option>
        <option>Incomplete</option>
        <option>Complete</option>
      </select>
    </div>
  );
};

export default Selector;