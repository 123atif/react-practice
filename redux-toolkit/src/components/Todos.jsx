import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'
const Todos = () => {
    const todos = useSelector((state) => state?.todos)

    const dispatch = useDispatch()
    const handleRemoveTodo = (todos) => {
        dispatch(removeTodo(todos.id))
    }
    return (
        <>
            <div>Todos</div>
            {todos?.map((todo) => (
                <li key={todo.id}>
                    {todo?.text}
                    <button onClick={() => handleRemoveTodo(todo)}>❌</button>
                </li>
            ))}
        </>
    )
}

export default Todos