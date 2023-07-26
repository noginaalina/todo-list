import {memo} from 'react';
import Button from "./Button";

import {Label, Input, AddDiv} from '../assets/styles/todo-list.styles'
import useHelpersTodo from "../hooks/useHelpersTodo";


const TaskAdd = () => {

    const {addRef, setValueInput, handleAddTask, handleSearch,
        edit, valueInput, handleSaveInput, handleOnChange, handleDelete, handleEdit} = useHelpersTodo()

    return (
        <div>
            <AddDiv>
                <Label>
                    <Input type="text" placeholder="Add a new task..." ref={addRef} />
                </Label>
                <Button title="Add" onClick={handleAddTask} />
            </AddDiv>
        </div>
    );
}

export default memo(TaskAdd);
