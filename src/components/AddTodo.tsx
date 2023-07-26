import React, {memo, useState} from 'react';
import Button from "./Button";

import {Label, Input, AddDiv} from '../assets/styles/todo-list.styles'
import useTodos from "../hooks/useTodos";


const TaskAdd = () => {
  const {addTodo} = useTodos()
  const [todoText ,setTodoText] = useState('')

  const handleChangeTodoText = (e : React.ChangeEvent<HTMLInputElement>) => setTodoText(e.target.value)
  const handleAddTodo = (e : React.KeyboardEvent<HTMLInputElement>) => {
      if (e.keyCode === 13) {
        addTodo(todoText)
        setTodoText('')
      }
  }

  const handleClickAddTodo = (e : React.KeyboardEvent<HTMLInputElement>) => {
      addTodo(todoText)
      setTodoText('')
  }

    return (
        <div>
            <AddDiv>
                <Label>
                    <Input type="text" placeholder="Add a new task..." value={todoText} onChange={handleChangeTodoText}  onKeyDown={handleAddTodo} />
                </Label>
                <Button title="Add"  onClick={handleClickAddTodo}/>
            </AddDiv>
        </div>
    );
}

export default memo(TaskAdd);
