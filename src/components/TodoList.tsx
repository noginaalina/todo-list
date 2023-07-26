import React from 'react';

import {ContainerTodo, ContainerTaskAdd, Input, AddDiv, Label, TitleStyle, ButtonStyle, ButtonCategory} from "../assets/styles/todo-list.styles";
import TodoItem from "./Todo";
import Button from "./Button";
import useHelpersTodo from '../hooks/useHelpersTodo';


const TodoList = () => {
    const {addRef, handleSearch, setValueInput, handleAddTask, edit, valueInput, handleSaveInput, handleOnChange, handleDelete, handleEdit, selectCategory} = useHelpersTodo()

   return (
           <ContainerTodo>
               <h1>TODO-LIST</h1>
               <ContainerTaskAdd >
                   <AddDiv>
                       <Label>
                           <Input type="text" placeholder="Add a new task..." ref={addRef} />
                       </Label>
                       <Button title="Add" onClick={handleAddTask} />
                   </AddDiv>
               </ContainerTaskAdd>

               <div style={{display: 'flex'}}>
               <ButtonCategory onClick={() =>selectCategory('all')}>All Tasks</ButtonCategory>
                <ButtonCategory onClick={() =>selectCategory(true)}>Completed Tasks</ButtonCategory>
                <ButtonCategory onClick={() =>selectCategory(false)}>Active Tasks</ButtonCategory>
                </div>
             

               <TitleStyle> Total Count: {handleSearch.length}</TitleStyle>
               {handleSearch.map((todo) => (
                   <TodoItem title={todo.title}
                             key={todo.id}
                             checked={todo.completed}
                             id={todo.id}
                             checkedOnClick={() => handleOnChange(todo.id)}
                             value={todo.title}
                             valueSave={valueInput}
                             onChangeInputSave={(e: React.ChangeEvent<HTMLInputElement>) => setValueInput(e.target.value)}
                             handeSaveInput={() => handleSaveInput(todo.id)}
                             edit={edit}
                   >
                       <Button title='Edit' onClick={() => handleEdit(todo.id, todo.title)} />
                       <Button title='Delete' onClick={() => handleDelete(todo.id)} />
                   </TodoItem>
               ))}
           </ContainerTodo>
       )
}


export default TodoList;