import './Status.css';
import { ChangeEvent } from 'react';

type StatusProps = {
  onStatusTask: (e: ChangeEvent<HTMLSelectElement>) => void;
  statusTask: string | undefined;
};

const Status: React.FC<StatusProps> = ({ onStatusTask, statusTask }) => {
  return (
    <label className="statusInput">
      Status
      <div>
      <select className="statusChoose" onChange={onStatusTask}>
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