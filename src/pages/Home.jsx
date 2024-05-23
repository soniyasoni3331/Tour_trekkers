import React from 'react';
import MainVid from "../assets/video/main.mp4"
import Hero from '../components/Hero/Hero.jsx';
import Places from '../components/Places/Places.jsx';
import BannerImg from '../components/BannerImg/BannerImg.jsx';
import Poster from "../assets/women.jpg"
import Blogs from './Blogs.jsx';
import Banner from '../components/Banner/Banner.jsx';
import Banner2 from '../assets/banner2.jpg';
import Testimonial from '../components/Testimonial/Testimonial.jsx';

function Home() {
  return (
    <>
      <div>
        <div className='relative h-[700px] '>
          <video 
          autoPlay
          loop
          muted
          className='absolute right-0 top-0 h-[650px] w-full object-cover z-[-1]'
          >
            <source src={MainVid} type='video/mp4'/>
          </video>
          <Hero />
        </div>
        <Places />
        <BannerImg img={Poster}/>
        <Blogs />
        <Banner />
        <BannerImg img={Banner2}/>
        <Testimonial />
        
      </div>
    </>
  )
}

export default Home