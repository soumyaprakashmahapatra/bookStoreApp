import React from 'react'
import Home from './home/Home'
import Course from './components/Course'
import Signup from './components/Signup'

import { Route, Routes} from "react-router-dom"
import Coursesall from './allCourses/Coursesall'


const App = () => {
  return (
  <>
  {/*Here we are making routing to different components like home,course etc*/}
   {/*<Home/>
     <Course/>*/} 
  <div className="dark:bg-slate-900 dark:text-white">
  <Routes>
         <Route path="/" element={<Home/>}/> 
        <Route path="/course" element={<Coursesall/>}/>
        <Route path="/signup" element={<Signup/>}/>
    </Routes>
  </div>
  </>
  )
}

export default App