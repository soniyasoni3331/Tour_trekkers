import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './pages/Layout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Blogs from './pages/Blogs.jsx';
import BlogDetails from './pages/BlogDetails.jsx';
import PlacesRoute from './pages/PlacesRoute.jsx';
import NoPages from './pages/NoPages.jsx';
import AOS from "aos";
import "aos/dist/aos.css";


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Layout />}>
      <Route index element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='blogs' element={<Blogs/>}/>
      <Route path='blogs/:id' element={<BlogDetails/>}/>
      <Route path='places' element={<PlacesRoute/>}/>
      <Route path='*' element={<NoPages/>}/>
    </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App