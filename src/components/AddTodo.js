import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { addTodo } from '../store/todoSlice';


const AddTodo = () => {

    const [input, setInput] = useState("")
    const dispatch = useDispatch()

    const todoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput("")
    }

    return (
        <>
            <form
            onSubmit={todoHandler}
            className='space-x-3 pt-12'
             >
                <input
                type='text'
                className='bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-800 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                placeholder='Enter Todo...'
                value={input}
                onChange={(e) => setInput(e.target.value) }
                 />
                <button
                type='submit'
                className='text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-500 rounded text-lg'
                >
                    Add
                </button>
            </form>
        </>
    )
}

export default AddTodo;