import * as React from 'react';
import './Selector.css';

const Selector = (props: any) => {
    return (
        <div>
            <select className={props.className}>
                <option>All</option>
                <option>Incomplete</option>
                <option>Complete</option>
            </select>
        </div>
    )
}

export default Selector;