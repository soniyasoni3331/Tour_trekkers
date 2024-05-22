import React from 'react'
import BlogCard from './BlogCard'
import Img1 from "../../assets/places/Img1.jpg"
import Img2 from "../../assets/places/Img2.jpg"
import Img3 from "../../assets/places/Img3.jpg"

const BlogsData = [
    {
        id:1,
        image:Img1,
        title:"The 10 best places to visit in India",
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate est quas esse quos quidem quam quo excepturi labore, unde, quaerat minima provident velit nisi expedita fugit quis, odit nihil commodi nulla sed? Recusandae pariatur quia, sint tempora aliquam velit ex deserunt incidunt consequuntur excepturi minima iste cupiditate facere, laudantium voluptatem molestias voluptatum. Animi, ullam natus voluptatum earum soluta nulla similique nostrum perferendis magni, est tempore eligendi laudantium. Aliquid totam aspernatur consequatur? Sint quam consequatur voluptatum, sunt eum dolores tempore repellendus eius, consequuntur illo fuga nesciunt nisi! Fuga suscipit commodi rerum cum odit exercitationem perferendis iure soluta, incidunt nemo tempora vero?',
        author: "John Doe",
        date: "April, 2022",
    },
    {
        id:2,
        image:Img2,
        title:"The 10 best places to visit in India",
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate est quas esse quos quidem quam quo excepturi labore, unde, quaerat minima provident velit nisi expedita fugit quis, odit nihil commodi nulla sed? Recusandae pariatur quia, sint tempora aliquam velit ex deserunt incidunt consequuntur excepturi minima iste cupiditate facere, laudantium voluptatem molestias voluptatum. Animi, ullam natus voluptatum earum soluta nulla similique nostrum perferendis magni, est tempore eligendi laudantium. Aliquid totam aspernatur consequatur? Sint quam consequatur voluptatum, sunt eum dolores tempore repellendus eius, consequuntur illo fuga nesciunt nisi! Fuga suscipit commodi rerum cum odit exercitationem perferendis iure soluta, incidunt nemo tempora vero?',
        author: "John Doe",
        date: "April, 2022",
    },
    {
        id:3,
        image:Img3,
        title:"The 10 best places to visit in India",
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate est quas esse quos quidem quam quo excepturi labore, unde, quaerat minima provident velit nisi expedita fugit quis, odit nihil commodi nulla sed? Recusandae pariatur quia, sint tempora aliquam velit ex deserunt incidunt consequuntur excepturi minima iste cupiditate facere, laudantium voluptatem molestias voluptatum. Animi, ullam natus voluptatum earum soluta nulla similique nostrum perferendis magni, est tempore eligendi laudantium. Aliquid totam aspernatur consequatur? Sint quam consequatur voluptatum, sunt eum dolores tempore repellendus eius, consequuntur illo fuga nesciunt nisi! Fuga suscipit commodi rerum cum odit exercitationem perferendis iure soluta, incidunt nemo tempora vero?',
        author: "John Doe",
        date: "April, 2022",
    },
]
function BlogsComp() {
  return (
    <div >
        <div className='container'>
            <h1 className='my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold '>Our latest Blogs</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {
                    BlogsData.map((item, index)=>(
                        <BlogCard key={index} {...item}/>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default BlogsComp