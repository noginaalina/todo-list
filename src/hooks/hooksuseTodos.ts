import {todos as initialDataTodos} from "../models/todo.model";
import {useCallback, useEffect, useMemo, useState} from "react";
import { v4 as uuidv4 } from 'uuid';

export interface Todo {
  id: string
  title: string
  completed: boolean
}

type FilterTodos = 'All' | 'Active' | 'Done'


const useTodos = () => {


  useEffect(() => {
    const localTodosJSON = localStorage.getItem('todos')
    if (!localTodosJSON) localStorage.setItem('todos',JSON.stringify(initialDataTodos))
  } , []);

  const getInitialTodos = useCallback(() => {
    const initialTodosJSON = localStorage.getItem('todos')
    if (initialTodosJSON) return JSON.parse(initialTodosJSON)
    return  []
  }, []);

  const initialTodos = getInitialTodos()

  const [todos , setTodos] = useState<Todo[]>(initialTodos)
  const [filter , setFilter] = useState<FilterTodos>('All')

  useEffect(() => {
    const newTodos = JSON.stringify(todos)
    localStorage.setItem('todos', newTodos)
  } , [todos])

  const addTodo = useCallback((value : string) => {
    setTodos([ {
      id: uuidv4(),
      title: value,
      completed: false
    }, ...todos])
  } , [todos])


  const editTileTodo = useCallback((title : string , id : string) => {
    const editedTodos = todos.map((todo => {
      if (todo.id === id)  return  {...todo , title }
      return  todo
    }))
    setTodos(editedTodos)
  }, [todos])

  const editCompletedTodo = useCallback((id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) return { ...todo, completed: !todo.completed };
        return todo;
      })
    );
  }, [todos])

  const setFilterTodos = useCallback((value: FilterTodos) => {
    setFilter(value);
  }, []);


  const filteredTodos = useMemo(() => {
    switch (filter) {
      case "Active":
        return todos.filter((todo) => !todo.completed);
      case "Done":
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  }, [filter, todos]);

  const todosContextValue = useMemo(
    () => ({
      todos,
      filteredTodos,
      // functions
      addTodo,
      editTileTodo,
      editCompletedTodo,
      setFilterTodos,
    }),
    [todos, filteredTodos, addTodo, editTileTodo, editCompletedTodo, setFilterTodos]
  );

  return todosContextValue;
};

export default useTodos;
