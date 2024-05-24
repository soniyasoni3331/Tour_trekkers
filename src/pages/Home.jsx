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
import Popup from '../components/Popup/Popup.jsx';
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 900,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  const [orderPopup, setOrderPopup] = React.useState(false);
  const handleOrderPopup = () =>{
    setOrderPopup(!orderPopup);
  }
  return (
    <>
      <div>
        <div className='relative h-[650px] '>
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
        <Places handleOrderPopup={handleOrderPopup}/>
        <BannerImg img={Poster}/>
        <Blogs />
        <Banner />
        <BannerImg img={Banner2}/>
        <Testimonial />
        <Popup orderPopup={orderPopup}
        setOrderPopup={setOrderPopup}/>
      </div>
    </>
  )
}

export default Home