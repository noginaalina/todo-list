import {FC, ReactNode, createContext, useCallback, useEffect, useMemo, useState} from 'react'
import {todos as initialDataTodos} from "../models/todo.model";
import { v4 as uuidv4 } from 'uuid';

export interface Todo {
  id: string
  title: string
  completed: boolean
}

type FilterTodos = 'All' | 'Active' | 'Done'

export type TodoContextType = {
 todos : Todo[]
  filteredTodos: Todo[],
  // functions
  addTodo: (value : string) => void,
  editTileTodo : (title : string , id : string) => void,
  editCompletedTodo : (id : string) => void,
  setFilterTodos : (value :FilterTodos ) => void
  deleteTodo : (id : string) => void
}

export const TodoContext = createContext<TodoContextType>({
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

const TodosProvider: FC<ITodosProviderProps> = props => {

  const { children } = props

  // const addRef = useRef<HTMLInputElement | null>(null);

  const getInitialTodos = () => {
    const initialTodosJSON = localStorage.getItem('todos')
    if (initialTodosJSON) return JSON.parse(initialTodosJSON)
    return  []
  };

  const initialTodos = getInitialTodos()

  const [todos , setTodos] = useState<Todo[]>(initialTodos)
  const [filter , setFilter] = useState<FilterTodos>('All')

  useEffect(() => {
    if (todos.length === 0) {
      localStorage.setItem('todos',JSON.stringify(initialDataTodos))
    }
    else {
      const newTodos = JSON.stringify(todos)
      localStorage.setItem('todos', newTodos)
    }
  } , [todos])

  const addTodo = useCallback((value : string) => {
    setTodos([ {
      id: uuidv4(),
      title: value,
      completed: false
    }, ...todos])
  } , [todos])

//   const addTodo = useCallback(() => {
//     if(addRef.current) {
//         const inputRef = addRef.current.value
//         const newTodo = {
//             id: uuidv4(),
//             title: inputRef,
//             completed: false
//         }
//         setTodos([newTodo, ...todos])
//         addRef.current.value = ''
//     }

// }, [todos]);

  const editTileTodo = useCallback((title : string , id : string) => {
    const editedTodos = todos.map((todo => {
      if (todo.id === id)  return  {...todo , title }
      return  todo
    }))
    setTodos(editedTodos)
  }, [todos])

  const editCompletedTodo = useCallback((id : string) => {
    const editedTodos = todos.map((todo => {
      if (todo.id === id)  return  {...todo , completed : !todo.completed }
      return  todo
    }))
    setTodos(editedTodos)
  },[todos])

  const deleteTodo = useCallback((id : string) => {
    const filteredTodos = todos.filter(todo => todo.id !== id)
    setTodos(filteredTodos)
  }, [todos])

  const setFilterTodos = useCallback((value :FilterTodos ) => setFilter(value), [])

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
        deleteTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}

export default TodosProvider; 