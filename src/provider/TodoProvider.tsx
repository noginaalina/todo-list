import React, {ReactNode, useEffect, useLayoutEffect, useMemo, useState} from 'react'
import {todos as initialDataTodos} from "../models/todo.model";

export interface Todo {
  id: string
  title: string
  completed: boolean
}

type FilterTodos = 'All' | 'Active' | 'Done'

export type TodoContext = {
 todos : Todo[]
  filteredTodos: Todo[],
  // functions
  addTodo: (value : string) => void,
  editTileTodo : (title : string , id : string) => void,
  editCompletedTodo : (id : string) => void,
  setFilterTodos : (value :FilterTodos ) => void
  deleteTodo : (id : string) => void
}

export const TodoContext = React.createContext<TodoContext>({
  todos: [],
  filteredTodos: [],
  // functions
  addTodo : () => null,
  editTileTodo : () => null,
  editCompletedTodo : () => null,
  setFilterTodos : () => null,
  deleteTodo : () => null
})

export interface ITodosProviderProps {
  children: ReactNode
}

const TodosProvider: React.FC<ITodosProviderProps> = props => {
  const { children } = props

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

  const addTodo = (value : string) => {
    setTodos([...todos, {
      id: new Date().toISOString(),
      title: value,
      completed: false
    }])
  }

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

  const deleteTodo = (id : string) => {
    const filteredTodos = todos.filter(todo => todo.id !== id)
    setTodos(filteredTodos)
  }

  const setFilterTodos = (value :FilterTodos ) => setFilter(value)

  const filteredTodos = useMemo(() => {
    switch (filter) {
      case "Active": return todos.filter(todo =>  !todo.completed)
      case "Done": return todos.filter(todo => todo.completed)
      default : return todos
    }
  } , [todos, filter])

  return (
    <TodoContext.Provider
      value={{
        todos,
        filteredTodos,
        // functions
        addTodo,
        editTileTodo,
        editCompletedTodo,
        setFilterTodos,
        deleteTodo
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}

export default TodosProvider
