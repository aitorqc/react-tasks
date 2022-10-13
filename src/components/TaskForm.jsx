import React, { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

export default function TaskForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const { createTask } = useContext(TaskContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        createTask(title, description);
        setTitle("");
        setDescription("");
    }

    return (
        <div className='max-w-md mx-auto'>
            <form className='bg-gray-800 p-10 mb-4' onSubmit={handleSubmit}>
                <h1 className='text-2xl font-bold text-white mb-3'>Crea una tarea</h1>
                <input
                    className='bg-slate-300 p-3 w-full mb-2 rounded-sm'
                    value={title} type="text" placeholder="Escribe tu tarea" onChange={(e) => setTitle(e.target.value)} autoFocus />
                <textarea
                    className='bg-slate-300 p-3 w-full mb-2 rounded-sm'
                    value={description} placeholder='Descripcion' onChange={(e) => setDescription(e.target.value)} />
                <button
                    className='bg-indigo-500 px-4 py-1 text-white'
                    type="submit">Guardar</button>
            </form>
        </div>
    )
}
