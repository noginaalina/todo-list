import React from 'react';

import {ButtonCategory, ContainerTaskAdd, ContainerTodo, TitleStyle} from "../assets/styles/todo-list.styles";
import TodoItem from "./Todo";
import useTodos from '../hooks/useTodos';
import AddTodo from "./AddTodo";


const TodoList = () => {

  const {  filteredTodos, setFilterTodos} = useTodos()
  console.log('filteredTodos', filteredTodos)

  return (
           <ContainerTodo>
               <h1>TODO-LIST</h1>
               <ContainerTaskAdd >
               <AddTodo/>
               </ContainerTaskAdd>

               <div style={{display: 'flex'}}>
                <ButtonCategory onClick={() => setFilterTodos('All')}>All Tasks</ButtonCategory>
                <ButtonCategory onClick={() => setFilterTodos('Done')}>Completed Tasks</ButtonCategory>
                <ButtonCategory onClick={() => setFilterTodos('Active')}>Active Tasks</ButtonCategory>
               </div>

               <TitleStyle> Total Count: {filteredTodos.length}</TitleStyle>
               {filteredTodos.map((todo) => <TodoItem todo={todo}/>)}
           </ContainerTodo>
       )
}

export default TodoList;