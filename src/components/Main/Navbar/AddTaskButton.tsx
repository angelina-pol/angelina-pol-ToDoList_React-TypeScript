import * as React from 'react';
import './AddTaskButton.css'
import AddTaskForm from '../Tasks/AddTaskForm';

const AddTaskButton = (props) => {
    const [isModal, setModal] = React.useState(false);
    return (
        <>
            <div>
                <button className="button" onClick={() => setModal(true)}>Add Task</button>
            </div>
            <AddTaskForm
                    isVisible={isModal}
                    onClose={() => setModal(false)}
            />
        </>
    )
}

export default AddTaskButton;