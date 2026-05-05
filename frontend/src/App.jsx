import React, { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import BlogPage from './pages/BlogPage'
import CreateBlog from './pages/CreateBlog'
import Footer from './components/Footer'
import ProfilePage from './pages/ProfilePage'
import SingleBlogPage from './pages/SingleBlogPage'
import LoginPage from './pages/login'
import RegisterPage from './pages/Register'
const App = () => {
  const [selectedCategory,setSelectedCategory] = useState("All");
  return (
    <div className="w-full overflow-x-hidden">
        <NavBar setSelectedCategory={setSelectedCategory}/>
        <div className='min-h-22'></div>
      <Routes>
        <Route path='/' element={<BlogPage selectedCategory={selectedCategory}/>}/>
        <Route path='/create' element={<CreateBlog/>}/>
        <Route path='/profile' element={<ProfilePage/>}/>
        <Route path='/blog/:id' element={<SingleBlogPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
