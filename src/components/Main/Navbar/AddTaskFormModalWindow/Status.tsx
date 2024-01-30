import './Status.css';

type StatusProps = {
  onStatusTask: (e: any) => void;
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