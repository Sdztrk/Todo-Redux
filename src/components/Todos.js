import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../store/todoSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


const Todos = () => {

    const todos = useSelector(state => state.todos)
    console.log(todos)

    const dispatch = useDispatch()


    return (
        <>

            <div className='color-red text-2xl py-4'>Todos</div>
            <ul className='bg-color-red text-white w-[100vw] flex flex-col justify-center items-center'>
                {todos.map((todo) => {
                    return (
                        <li
                            className='bg-blue-500 w-[50%] h-12 flex flex-row justify-between  mb-1 list-decimal'
                            key={todo.id}>
                            <h1
                                className='mt-3 ml-3'
                            >
                                {todo.text}
                            </h1>
                            <FontAwesomeIcon onClick={() => dispatch(removeTodo(todo.id))} icon={faTrash} className='cursor-pointer mt-3 mr-3' />
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default Todos