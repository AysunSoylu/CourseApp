import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { courses } from './Data'
import Course from './components/Course'

function App() {
  

  return (
    <>
      <div>
        <Header />
        {
          courses?.map((course)=>(
            <Course key={course.id} course={course} />
          ))
        }
      </div>
    </>
  )
}

export default App
