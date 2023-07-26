import React from 'react';

import { ContainerButtons, InputEdit, ButtonEdit, TitleStyle, ContainerTodoItem} from '../assets/styles/todo-list.styles'
import Checkbox from "./Checkbox";

type TodoItemPropsType = {
    title: string,
    checkedOnClick: () => void,
    checked: boolean
    id: string,
    children: React.ReactNode,
    value: string,
    onChangeInputSave: (event: React.ChangeEvent<HTMLInputElement>) => void,
    valueSave: string,
    handeSaveInput: () => void,
    edit: null | string | boolean
}

const ToDoItem = ({title, id, children, checked, checkedOnClick, onChangeInputSave, valueSave, handeSaveInput, edit}: TodoItemPropsType) => {
    return (
        <ContainerTodoItem>
            <div>
                {edit === id ? (
                    <div>
                        <InputEdit type="text" value={valueSave} onChange={onChangeInputSave} />
                        <ButtonEdit onClick={handeSaveInput}>Save</ButtonEdit>
                    </div>) :

                    (<TitleStyle id={id}>{title}</TitleStyle>)
                }
                <Checkbox checked={checked} checkedOnClick={checkedOnClick} />
            </div>
                <ContainerButtons>
                    {children}
                </ContainerButtons>
        </ContainerTodoItem>
    );
}

export default React.memo(ToDoItem);