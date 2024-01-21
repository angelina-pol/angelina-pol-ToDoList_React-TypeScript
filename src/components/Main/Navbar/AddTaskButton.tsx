import * as React from 'react';
import './AddTaskButton.css'
import AddTaskForm from './AddTaskFormModalWindow/AddTaskForm';

type AddTaskButtonProps = {
    onAddTask: (e: any) => void;
    isVisible: boolean;
    setIsVisible: (val: boolean) => void;
}

const AddTaskButton: React.FC<AddTaskButtonProps> = ({onAddTask, isVisible, setIsVisible}) => {
    return (
        <>
            <div>
                <button className="button" onClick={() => setIsVisible(true)}>Add Task</button>
            </div>
            <AddTaskForm
                    isVisible={isVisible}
                    onClose={() => setIsVisible(false)} 
                    onAddTask={onAddTask}
            />
        </>
    )
}

export default AddTaskButton;