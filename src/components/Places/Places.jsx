import React from 'react'
import PlacesCard from './PlacesCard'

const PlacesData = [
    {
        img:Img1,
        title: "Boat tour",
        location: "USA",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, modi.',
        price: "100"
    }
]

function Places() {
  return (
    <div className='bg-gray-50 py-10 '>
    <div className='container'>
        <h1 className='my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold'>Best Places to visit</h1>
    </div>
    {
        PlacesData.map((item, index) =>{
            <PlacesCard key ={index} {...item} />
        })
    }
</div>
  )
}

export default Places