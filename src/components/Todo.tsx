import React, {useState} from 'react';

import {ButtonEdit, ContainerTodoItem, InputEdit, TitleStyle} from '../assets/styles/todo-list.styles'
import Checkbox from "./Checkbox";
import useTodos from "../hooks/useTodos";
import Button from "./Button";
import {Todo} from "../provider/TodoProvider";

type TodoItemPropsType = {
    todo : Todo
}

const ToDoItem = (props: TodoItemPropsType) => {
  const {  todo} = props
  const {id , title , completed} = todo
  const { editCompletedTodo , editTileTodo  , deleteTodo} = useTodos()
  const [editTitleTodo , setEditTitleTodo] = useState('')
  const [isEdit , setIsEdit] = useState(false)

  const handleEditTodo = () => {
    editTileTodo(editTitleTodo, id)
    setIsEdit(false)
  }

    const renderContent = () => {
        if (isEdit) {return (
          <div>
              <InputEdit type="text" value={editTitleTodo} onChange={(e) => {setEditTitleTodo(e.target.value)}} />
              <ButtonEdit onClick={handleEditTodo}>Save</ButtonEdit>
          </div>)}

        return (
          <div style={{display : 'flex' , alignItems : 'center' }}>
              <TitleStyle id={id}>{title}</TitleStyle>
              <Button title='Edit' onClick={() => {setIsEdit(!isEdit)}} />
              <Button title='Delete' onClick={() => {deleteTodo(id)}} />
          </div>
        )
    }

    return (
        <ContainerTodoItem>
            <div>
                {renderContent()}
                <Checkbox checked={completed} checkedOnClick={() => editCompletedTodo(id)}  />
            </div>
        </ContainerTodoItem>
    );
}

export default React.memo(ToDoItem);