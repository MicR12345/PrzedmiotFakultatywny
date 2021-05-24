import React from 'react';
import { TodoService } from '../../services/todo.service';
import {useAction} from '../../hooks/useAction';
import todoSelector from '../../store/selectors/todo.selector';
import {useSelector} from 'react-redux';
import {Todo} from '../../store/reducers/todos.reducer'

const TodoPanel = () => {
    const todoActions = useAction(TodoService);
    const todos = useSelector(todoSelector.getAll);

    React.useEffect(() => {
        
        todoActions.setNewTodo(
            {
                id: 123,
                label: 'testowyLabel',
                done: false,
                description: 'pierwszy wpis',
            }
        );
    },[]);

    const deleteTodo = (todo: Todo) =>{
        todoActions.setDeleteTodo(todo);
    }

    return(
    <div>
        {todos.map((todo,index) => (
            <div key={index}>
                <button onClick={() =>deleteTodo(todo)}>Remove</button>
                <p>{todo.label}</p>
                <p>{todo.done}</p>
                <p>{todo.description}</p>
            </div>
        ))}
    </div>);
}

export default TodoPanel;