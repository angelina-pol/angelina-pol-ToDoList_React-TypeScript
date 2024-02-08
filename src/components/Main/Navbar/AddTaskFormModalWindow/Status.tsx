import './Status.css';
import store from '../../../../stores/mainStore';

type StatusProps = {
  statusTask: string | undefined;
};

const Status: React.FC<StatusProps> = ({ statusTask }) => {
  return (
    <label className="statusInput">
      Status
      <div>
      <select className="statusChoose" onChange={store.onStatusTask}>
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