import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import LogoImg from '../../assets/Logo.png';
import {FaCaretDown} from "react-icons/fa";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu.jsx";

// const NavbarLinks = [
//   {
//       name: "Home",
//       link: "/",
//   },
//   {
//       name: "About",
//       link: "/about",
//   },
//   {
//       name: "Blogs",
//       link: "/blogs",
//   },
//   {
//       name: "Best Places",
//       link: "/places",
//   },
// ]

const dropdownLinks=[
  {
    name: "Our Services",
    link: "/#services",
  },
  {
    name: "Top Brands",
    link: "/#mobile_brands",
  },
  {
    name: "Location",
    link: "/#location",
  },
]

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
    <div className='fixed top-0 left-0 w-full bg-white text-black shadow-md z-[99999]'>
      <div className='bg-gradient-to-r from-primary to-secodary text-white '>
      <div className='container py-[2px]sm:block'>
        <div className="flex justify-between items-center">
          <p>20% off on next booking</p>
          <p>Mobile No, +91 123456789</p>
        </div>
      </div>
      </div>
      <div className='container py-3 sm:py-0'>
        <div className='flex justify-between items-center'>
          {/* logo section  */}
          <div className='flex'>
            <Link to="/" >
              <img src={LogoImg} alt="" className='h-16 '/>
            </Link>
          </div>
          {/* NavLink section  */}
          <div className='hidden md:block '>
            <ul className='flex items-center gap-6'>
              <li className='py-4'>
                <NavLink  to="/" className={({ isActive }) => (isActive ? 'active' : undefined)}>
                  Home
                </NavLink>
              </li>              
              <li className='py-4'>
                <NavLink to="/blogs" className={({ isActive }) => (isActive ? 'active' : undefined)} 
                >
                  Blogs
                </NavLink>
              </li>
              <li className='py-4'>
                <NavLink  to="/places"  className={({ isActive }) => (isActive ? 'active' : undefined)} >
                  Best Places 
                </NavLink>
              </li>
              <li className='py-4'>
                <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : undefined)} >
                  About
                </NavLink>
              </li>
              {/* Dropdown section */}
              <li className='py-4 relative group cursor-pointer'>
                <div className='dropdown group flex items-center'>
                  <span>Quick Links</span>
                  <span>
                  <FaCaretDown className="transition-all duration-200 group-hover:rotate-180"/>
                  </span>
                </div>
                <div className='absolute -left-9 z-[9999] hidden group-hover:block shadow-md text-black w-[150px] bg-white p-2'>
                  <ul>
                    {
                      dropdownLinks.map((data)=>{
                          return (
                            <li key={data.name}>
                            <a 
                            className='inline-block w-full rounded-md p-2 hover:bg-primary/20' href={data.link}>{data.name}</a>
                          </li>
                          )
                      })
                    }
                  </ul>
                </div>
              </li>
            </ul>
          </div>

          {/* Book Now button */}
          <div className='flex items-center gap-4'>
                <button className='bg-gradient-to-r from-primary to-secodary 
                hover:bg-gradient-to-r hover:from-secondary hover:to-primary transition-all duration-500 text-white px-3 py-1 rounded-full '>Book Now</button>
                {/* Mobile Hamburger Menu */}
                <div className='md:hidden
                block'>
                    {showMenu ? (
                      <HiMenuAlt1 
                      onClick={toggleMenu}
                      className="cursor-pointer transition-all"
                      size={30}
                      />
                    ): (<HiMenuAlt3
                      onClick={toggleMenu}
                      className="cursor-pointer transition-all"
                      size={30} />
                    )}
                </div>
          </div>
        </div>
      </div>
      <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu}/>
    </div>
    </>
  )
}

export default Navbar