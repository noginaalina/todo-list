import { Background } from './assets/styles/todo-list.styles';
import TodoList from './components/TodoList';
import './index.css';

function App() {
    return (
        <Background>
        <TodoList/>
        </Background>
    );
}

export default App;
