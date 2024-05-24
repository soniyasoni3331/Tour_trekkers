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
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate est quas esse quos quidem quam quo excepturi labore, unde, quaerat minima provident velit nisi expedita fugit quis, odit nihil commodi nulla sed? Recusandae pariatur quia, sint tempora aliquam velit ex deserunt incidunt consequuntur excepturi minima iste cupiditate facere, laudantium voluptatem molestias voluptatum. Animi, ullam natus voluptatum earum soluta nulla similique nostrum perferendis magni, est tempore eligendi laudantium. Aliquid totam aspernatur consequatur? Sint quam consequatur voluptatum, sunt eum dolores tempore repellendus eius, consequuntur illo fuga nesciunt nisi! Fuga suscipit commodi rerum cum odit exercitationem perferendis iure soluta, incidunt nemo tempora vero? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias quas omnis assumenda vitae sapiente aspernatur aperiam veritatis. Ipsa, sit laborum eum doloremque, assumenda dolores sint porro sunt ut cupiditate neque quis nobis delectus laboriosam vitae fugit dolorem quisquam harum ullam ab tenetur repellat necessitatibus, cum praesentium! Ex architecto placeat harum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita beatae, accusamus ea excepturi labore enim molestias. Tenetur saepe distinctio neque sit excepturi? Incidunt pariatur reprehenderit earum eos mollitia sit, architecto quibusdam, vero perspiciatis placeat ducimus nihil accusantium amet, corrupti libero? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure adipisci accusantium aperiam error incidunt, natus labore quam laudantium molestias.',
        author: "John Doe",
        date: "April, 2022",
    },
    {
        id:2,
        image:Img2,
        title:"The 10 best places to visit in India",
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate est quas esse quos quidem quam quo excepturi labore, unde, quaerat minima provident velit nisi expedita fugit quis, odit nihil commodi nulla sed? Recusandae pariatur quia, sint tempora aliquam velit ex deserunt incidunt consequuntur excepturi minima iste cupiditate facere, laudantium voluptatem molestias voluptatum. Animi, ullam natus voluptatum earum soluta nulla similique nostrum perferendis magni, est tempore eligendi laudantium. Aliquid totam aspernatur consequatur? Sint quam consequatur voluptatum, sunt eum dolores tempore repellendus eius, consequuntur illo fuga nesciunt nisi! Fuga suscipit commodi rerum cum odit exercitationem perferendis iure soluta, incidunt nemo tempora vero? Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi beatae facilis deserunt porro sint, repellendus, tempore dignissimos, cum error cumque fugit molestiae suscipit rerum id amet. Rerum enim dolore minus dicta id maiores eveniet nisi veniam tenetur quas molestiae similique architecto esse porro, nesciunt, vel tempora placeat dolorum odit iure explicabo, voluptatum deleniti consequatur hic! Dicta animi laudantium dolorum fuga rem perspiciatis saepe exercitationem ducimus, velit nam dolores voluptate facilis rerum sit impedit. Aut asperiores voluptatum ducimus facere exercitationem non! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit doloribus voluptatibus exercitationem eveniet consequuntur fugit non. Ut eos architecto aspernatur.',
        author: "John Doe",
        date: "April, 2022",
    },
    {
        id:3,
        image:Img3,
        title:"The 10 best places to visit in India",
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate est quas esse quos quidem quam quo excepturi labore, unde, quaerat minima provident velit nisi expedita fugit quis, odit nihil commodi nulla sed? Recusandae pariatur quia, sint tempora aliquam velit ex deserunt incidunt consequuntur excepturi minima iste cupiditate facere, laudantium voluptatem molestias voluptatum. Animi, ullam natus voluptatum earum soluta nulla similique nostrum perferendis magni, est tempore eligendi laudantium. Aliquid totam aspernatur consequatur? Sint quam consequatur voluptatum, sunt eum dolores tempore repellendus eius, consequuntur illo fuga nesciunt nisi! Fuga suscipit commodi rerum cum odit exercitationem perferendis iure soluta, incidunt nemo tempora vero? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic maiores nihil asperiores, quam obcaecati mollitia id perferendis necessitatibus doloribus repellat, deserunt saepe quos, quis praesentium quidem cumque tempore neque sit harum deleniti dolores animi reprehenderit facilis! Illo fugiat blanditiis sit molestias odit sunt libero, nesciunt ducimus inventore commodi voluptates praesentium. Nesciunt quod fugit iste, similique consectetur hic nemo id tempore porro quisquam eos! Ad provident praesentium consectetur, non dolorum sit sequi impedit deleniti sunt minus iste atque id, dignissimos ratione delectus molestias porro optio quas dolor facere ab, quis eos harum soluta. Hic nobis facilis ipsam! Minus sunt consequatur atque.',
        author: "John Doe",
        date: "April, 2022",
    },
]
function BlogsComp() {
  return (
    <div  className='py-8'>
        <div data-aos="fade-up" className='container'>
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