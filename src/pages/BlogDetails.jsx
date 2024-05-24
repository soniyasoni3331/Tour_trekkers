import React from 'react'
import { useLocation } from 'react-router-dom'
import BlogsComp from '../components/Blogs/BlogsComp'

function BlogDetails() {
  const location = useLocation();
  console.log(location, "useLocation");
  const {image, date, title, description, author} = location.state
  return (
    <div className='min-h-[550px] pt-20'>
      <div className='h-[400px] overflow-hidden '>
        <img src={image} alt="" className='mx-auto h-[400px] w-full object-cover transition-all duration-700 hover:scale-110'/>
      </div>
      <div className='container pb-14'>
        <p className='text-slate-600 text-sm py-3'>{" "}
         written by {author} on date {date}</p>
         <h1 className='text-2xl font-semibold py-4'>{title}</h1>
         <p className='py-6'>{description}</p>
      </div>
      <BlogsComp/>
    </div>
  )
}

export default BlogDetails