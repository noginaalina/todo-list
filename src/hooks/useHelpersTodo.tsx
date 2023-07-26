import {useCallback, useEffect, useRef, useState} from 'react';

import {todos} from "../models/todo.model";
import {v4 as uuid} from 'uuid'


const HelpersToDoList = () => {
    const [task, setTask] = useState(todos)
    const [newTask, setNewTask] = useState(task)
 
    const [taskAdd, setTaskAdd] = useState<string>('')
    const [valueInput, setValueInput] = useState<string>('');
    const [edit, setEdit] = useState<string | boolean | null>(null)
    const [search, setSearch] = useState<string>('')


    const addRef = useRef<HTMLInputElement | null>(null)

    // useEffect(() => {
    //     setNewTask(JSON.parse(localStorage.getItem('todos')!))
    // }, [])


    // const saveToLocalStorage = () => {
    //     window.localStorage.setItem('todos', JSON.stringify(newTask));
    // };


  
   const selectCategory = (status: string | boolean) => {
        if (status === 'all') {
            setNewTask(JSON.parse(localStorage.getItem('todos')!))
        } else {
            const task = JSON.parse(localStorage.getItem('todos')!)
            let newTodo = task.filter((item: { completed: boolean; }) => item.completed === status)
            setNewTask(newTodo)
        }
    };


    const handleAddTask = () => {
        if(addRef.current) {
            const inputRef = addRef.current.value
            const newTodo = {
                id: uuid(),
                title: inputRef,
                completed: false
            }
            setNewTask([newTodo, ...newTask])
            addRef.current.value = ''
            // saveToLocalStorage()
        }

    };

    const handleEdit = useCallback((id: string, title: string) => {
        setEdit(id)
        setValueInput(title)
    },[]);

    const handleDelete = useCallback((id: string) => {
        setNewTask(newTask.filter(todo => todo.id !== id))
    },[newTask]);


    const handleOnChange = (id: string) => {
        setNewTask(newTask.filter((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed
                // saveToLocalStorage()
            }
            return newTask
        }))

    };

    const handleSaveInput = (id: string) => {
        setNewTask(newTask.map(todo => {
            if(todo.id === id) {
                todo.title = valueInput
            }
            return todo
        }))
        setEdit(null)
    };

    const handleSearch =  newTask.filter(todo => {
        return todo.title.toLowerCase().includes(search)
    });

    return {addRef, setValueInput, handleAddTask, setTask, setSearch, setNewTask, newTask, edit, setEdit, setTaskAdd, taskAdd, valueInput, handleSaveInput, handleOnChange, handleDelete, handleEdit, handleSearch, selectCategory}
}

export default HelpersToDoList;