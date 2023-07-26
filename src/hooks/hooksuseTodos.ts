import {todos as initialDataTodos} from "../models/todo.model";
import {useEffect, useLayoutEffect, useMemo, useState} from "react";

export interface Todo {
  id: string
  title: string
  completed: boolean
}

type FilterTodos = 'All' | 'Active' | 'Done'

const useTodos = () => {

  useLayoutEffect(() => {
    const localTodosJSON = localStorage.getItem('todos')
    if (!localTodosJSON) localStorage.setItem('todos',JSON.stringify(initialDataTodos))
  } , [])

  const getInitialTodos = () => {
    const initialTodosJSON = localStorage.getItem('todos')
    if (initialTodosJSON) return JSON.parse(initialTodosJSON)
    return  []
  }

  const initialTodos = getInitialTodos()
  const [todos , setTodos] = useState<Todo[]>(initialTodos)
  const [filter , setFilter] = useState<FilterTodos>('All')

  useEffect(() => {
    const newTodos = JSON.stringify(todos)
    localStorage.setItem('todos', newTodos)
  } , [todos])

  const addTodo = (value : string) => setTodos([...todos , {
    id : new Date().toISOString(),
    title : value,
    completed : false
  } ])

  const editTileTodo = (title : string , id : string) => {
    const editedTodos = todos.map((todo => {
      if (todo.id === id)  return  {...todo , title }
      return  todo
    }))
    setTodos(editedTodos)
  }

  const editCompletedTodo = (id : string) => {
    const editedTodos = todos.map((todo => {
      if (todo.id === id)  return  {...todo , completed : !todo.completed }
      return  todo
    }))
    setTodos(editedTodos)
  }

  const setFilterTodos = (value :FilterTodos ) => setFilter(value)


  const filteredTodos = useMemo(() => {
    switch (filter) {
      case "Active": return todos.filter(todo =>  !todo.completed)
      case "Done": return todos.filter(todo => todo.completed)
      default : return todos
    }
  } , [todos])

  return {
    todos,
    filteredTodos,
    // functions
    addTodo,
    editTileTodo,
    editCompletedTodo,
    setFilterTodos
  }
};

export default useTodos;