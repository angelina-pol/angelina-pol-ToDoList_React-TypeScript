import './Selector.css';
import { ChangeEvent } from 'react';

type SelectorProps = {
  className: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};

const Selector: React.FC<SelectorProps> = ({ className, onChange }) => {
  return (
    <div>
      <select className={className} onChange={onChange}>
        <option>All</option>
        <option>Incomplete</option>
        <option>Complete</option>
      </select>
    </div>
  );
};

export default Selector;