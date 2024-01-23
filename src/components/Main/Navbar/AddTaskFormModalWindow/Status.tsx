import './Status.css';
import Selector from '../Selector'

type StatusProps = {

}

const Status: React.FC<StatusProps> = () => {
  return(
      <label className='statusInput'>
        Status
        <Selector className={'statusChoose'} />
      </label>
  )
}

export default Status;