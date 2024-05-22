import React from 'react'
import PlacesCard from './PlacesCard.jsx'
import Img1 from "../../assets/places/Img1.jpg";
import Img2 from "../../assets/places/Img2.jpg";
import Img3 from "../../assets/places/Img3.jpg";
import Img4 from "../../assets/places/Img4.jpg";
import Img5 from "../../assets/places/Img5.jpg";
import Img6 from "../../assets/places/Img6.jpg";

const PlacesData = [
    {
        img: Img1,
        title: "Boat tour",
        location: "USA",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, modi.',
        price: 100,
        type: "Cultural Relax",
    },
    {
        img:Img2,
        title: "Taj Mahal",
        location: "India",
        description: 'Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra',
        price: 6700,
        type: "Cultural Relax",
    },
    {
        img:Img3,
        title: "Underwater",
        location: "US",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, modi.',
        price: 6200,
        type: "Cultural Relax",
    },
    {
        img:Img4,
        title: "Sydney ",
        location: "USA",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, modi.',
        price: 6700,
        type: "Cultural Relax",
    },
    {
        img:Img5,
        title: "Los Angeles",
        location: "United states",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, modi.',
        price: 100,
        type: "Cultural Relax",
    },
    {
        img:Img6,
        title: "Los Vegas",
        location: "California",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, modi.',
        price: 6200,
        type: "Cultural Relax",
    },
]

function Places() {
  return (
    <div className='bg-gray-50 py-10 '>
    <div className='container'>
        <h1 className='my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold'>Best Places to visit</h1>
    
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
    {
        PlacesData.map((item, index) =>(
            <PlacesCard key ={index} {...item} />
        ))
    }
    </div>
</div>
</div>
  )
}

export default Places