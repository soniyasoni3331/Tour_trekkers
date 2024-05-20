import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Blogs from './pages/Blogs';
import BlogDetails from './pages/BlogDetails';
import PlacesRoute from './pages/PlacesRoute';
import NoPages from './pages/NoPages';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Layout />}>
      <Route index element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/blogs' element={<Blogs/>}/>
      <Route path='/blogs/:id' element={<BlogDetails/>}/>
      <Route path='/places' element={<PlacesRoute/>}/>
      <Route path='*' element={<NoPages/>}/>
    </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App