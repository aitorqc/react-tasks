import React, { createContext, useEffect, useState } from 'react';
import { tasks as data } from "../data/Tasks";

export const TaskContext = createContext();

export default function TaskContextProvider(props) {
    const [tasks, setTasks] = useState([]);

    useEffect(()=>{
        setTasks(data);
    }, [])

    function createTask(title, description) {
        setTasks([...tasks, {
            id: (tasks.length),
            title: title,
            description: description
        }]);
    }

    function deleteTask(id) {
        setTasks(tasks.filter((task) => task.id !== id));
    }

    return (
        <TaskContext.Provider value={
            {
                tasks,
                createTask,
                deleteTask
            }
        }>
            {props.children}
        </TaskContext.Provider>
    )
}
