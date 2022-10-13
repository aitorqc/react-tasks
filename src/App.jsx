import React from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

export default function App() {
  return (
    <main className='bg-zinc-900 h-screen'>
      <section className='container mx-auto p-10'>
        <TaskForm></TaskForm>
      </section>
      <section className='container mx-auto'>
        <TaskList></TaskList>
      </section>
    </main>
  )
}

