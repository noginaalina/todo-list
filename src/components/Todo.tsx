import {useCallback, memo, useState} from 'react';
import Checkbox from "./Checkbox";
import useTodos from "../hooks/useTodos";
import Button from "./Button";
import {Todo} from "../provider/TodoProvider";
import Task from './Task';

type TodoItemPropsType = {
  todo : Todo
  editTileTodo: (title : string , id : string) => void
}

const ToDoItem = ({todo:{id, title, completed}, editTileTodo}: TodoItemPropsType) => {

  const { editCompletedTodo , deleteTodo} = useTodos()
  
  const [editTitleTodo , setEditTitleTodo] = useState(title)
  const [isEdit , setIsEdit] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false);

  
  const handleEditTodo = useCallback(() => {
    editTileTodo(editTitleTodo, id)
    setIsEdit(false)
  }, [editTileTodo, id, editTitleTodo])

    const renderContent = () => {
        if (isEdit) {return (
          <div className="w-800 grid grid-cols-2 bg-transparent border border-purple-800 shadow-md gap-x-80 items-center rounded-lg mb-10 p-4">
              <input className="flex-1 outline-none p-2 border border-purple-800 bg-transparent text-white rounded-lg text-base tracking-widest shadow-md" type="text" value={editTitleTodo} onChange={(e) => {setEditTitleTodo(e.target.value)}} />
              <button className="text-lg ml-24 py-2 px-7 outline-none border border-purple-800 bg-transparent text-purple-700 rounded-lg transition duration-400 shadow-md cursor-pointer w-28"
 onClick={handleEditTodo}>Save</button>
          </div>)}

        return (
          <div className="w-800 grid grid-cols-2 bg-transparent border border-purple-800 shadow-md gap-x-80 items-center rounded-lg mb-10 p-4">
              <Task id={id} isExpanded={isExpanded} title={title}/>
              
              <div className="w-200 h-50 flex justify-between items-center pt-2">
              <Checkbox checked={completed} checkedOnClick={() => editCompletedTodo(id)}  />
              <Button title='Edit' onClick={() => {setIsEdit(!isEdit)}} />
              <Button title='Delete' onClick={() => {deleteTodo(id)}} />
              {/* <Button title={isExpanded ? 'View Less' : 'View More'} onClick={() => setIsExpanded(!isExpanded)} /> */}
              </div>
          </div>
        )
    }

    return (
<div>
                {renderContent()}
                </div>
    );
};

export default memo(ToDoItem);