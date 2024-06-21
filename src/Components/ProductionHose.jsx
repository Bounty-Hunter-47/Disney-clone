import React from 'react'
import marvel from './../Assets/Images/marvel.png'
import nationalGeo from './../Assets/Images/nationalG.png'
import pixar from './../Assets/Images/pixar.png'
import starwar from './../Assets/Images/starwar.png'
import disney from './../Assets/Images/disney.png'
import disneyVideo from './../Assets/Videos/disney.mp4'
import marvelVideo from './../Assets/Videos/marvel.mp4'
import nationalGeoVideo from './../Assets/Videos/national-geographic.mp4'
import pixarVideo from './../Assets/Videos/pixar.mp4'
import starwarVideo from './../Assets/Videos/star-wars.mp4'

const ProductionHose = () => {
  const productionHouseData = [

    {
      logo: pixar,
      video: pixarVideo
    },
    {
      logo: marvel,
      video: marvelVideo
    },
    {
      logo: starwar,
      video: starwarVideo
    },
    {
      logo: nationalGeo,
      video: nationalGeoVideo
    },
    {
      logo: disney,
      video: disneyVideo
    }
  ]
  return (
    <div className='flex md:gap-x-5 gap-x-3 md:px-20 md:py-4 px-6 pt-8 justify-center'>
      {
        productionHouseData.map((data, index) => (
          <div key={index} className='relative bg-gray-800 border-2 border-gray-600 rounded-lg cursor-pointer hover:scale-105
           transition-all duration-150 ease-in-out shadow-xl shadow-black'>
            <video autoPlay loop playsInline muted className=' absolute object-cover w-full rounded-lg -z-10' src={data.video}></video>
            <img src={data.logo} alt="logo" />
          </div>
        ))
      }
    </div>
  )
}

export default ProductionHose
