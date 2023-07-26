import {useContext} from "react";
import {TodoContext} from "../provider/TodoProvider";

const useTodos = () => useContext(TodoContext)
export default useTodos