import TodoItem from "./Todo";
import useTodos from '../hooks/useTodos';
import AddTodo from "./AddTodo";
import { memo } from "react";

const TodoList = () => {

  const {filteredTodos, setFilterTodos, addTodo, editTileTodo} = useTodos()

  return (
           <div className="flex flex-col items-center">
               <h1 className="text-lg flex-1 outline-none p-2  bg-transparent rounded-lg text-base tracking-widest flex justify-between">TODO-LIST</h1>
               <div className="w-800 h-120 bg-transparent rounded-lg flex flex-col justify-center items-center pl-50 border border-purple-800 shadow-md">
               <AddTodo addTodo={addTodo}/>
               </div>

               <div style={{marginTop: '20px'}}>
                <button  className="text-lg ml-10 py-2 px-7 outline-none border border-purple-800 bg-transparent text-purple-700 rounded-lg transition duration-400 shadow-md cursor-pointer" onClick={() => setFilterTodos('All')}>All Tasks</button>
                <button  className="text-lg ml-10 py-2 px-7 outline-none border border-purple-800 bg-transparent text-purple-700 rounded-lg transition duration-400 shadow-md cursor-pointer" onClick={() => setFilterTodos('Done')}>Completed Tasks</button>
                <button  className="text-lg ml-10 py-2 px-7 outline-none border border-purple-800 bg-transparent text-purple-700 rounded-lg transition duration-400 shadow-md cursor-pointer" onClick={() => setFilterTodos('Active')}>Active Tasks</button>
               </div>

               <h2 className="text-lg flex-1 outline-none p-2  bg-transparent rounded-lg text-base tracking-widest  flex justify-between"> Total Count: {filteredTodos.length}</h2>
               {filteredTodos.map((todo) => <TodoItem editTileTodo={editTileTodo} key={todo.id} todo={todo}/>)}
           </div>
       )
}

export default memo(TodoList);