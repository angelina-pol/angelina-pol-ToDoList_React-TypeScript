import * as React from 'react';
import './Selector.css';

type Props = {
    className: string;
}

const Selector = ({className}: Props) => {
    return (
        <div>
            <select className={className}>
                <option>All</option>
                <option>Incomplete</option>
                <option>Complete</option>
            </select>
        </div>
    )
}

export default Selector;