import './Status.css';

type StatusProps = {
  onStatusTask: (e: any) => void;
};

const Status: React.FC<StatusProps> = ({ onStatusTask }) => {
  return (
    <label className="statusInput">
      Status
      <div>
      <select className="statusChoose" onChange={onStatusTask}>
        <option>Incomplete</option>
        <option>Complete</option>
      </select>
    </div>
    </label>
  );
};

export default Status;