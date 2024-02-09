import './Status.css';
import { ChangeEvent } from 'react';

type StatusProps = {
  statusTask: string | undefined;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};

const Status: React.FC<StatusProps> = ({ statusTask, onChange }) => {
  return (
    <label className="statusInput">
      Status
      <div>
      <select className="statusChoose" onChange={onChange}>
        <option>{statusTask}</option>
        <option>
          {
            statusTask === "Complete" ? "Incomplete" : "Complete"
          }
        </option>
      </select>
    </div>
    </label>
  );
};

export default Status;