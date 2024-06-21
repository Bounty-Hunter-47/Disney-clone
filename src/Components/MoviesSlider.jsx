import { base_url_for_getting_image } from '../APIs/getTop100Movies'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useQuery } from '@tanstack/react-query';
import { getTop100Movies } from '../APIs/getTop100Movies.js';
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const MoviesSlider = () => {

  const { data: top100MoviesData, isError: top100MoviesIsError, isLoading: top100MoviesIsLoading, error: top100MoviesError } = useQuery({
    queryKey: ['top100Movies', { category: "bat-man" }],
    queryFn: () => getTop100Movies("batman")
  });

  const [showLeftSlider, setShowLeftSlider] = useState(false)
  const [showRightSlider, setShowRightSlider] = useState(true)
  const sliderRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      setShowLeftSlider(sliderRef.current?.scrollLeft > 0);
      // setShowRightSlider(sliderRef.current?.scrollWidth && sliderRef.current?.scrollLeft < sliderRef.current?.scrollWidth - sliderRef.current?.clientWidth - (160 - 32));
      console.log("scorrolable width :" + sliderRef.current?.scrollWidth, "scrollleft :" + sliderRef.current?.scrollLeft, "scroll width: " + sliderRef.current?.scrollWidth, "client width: " + sliderRef.current?.clientWidth + "padding and gap : (160 - 32)");
    }
    sliderRef.current?.addEventListener('scroll', handleScroll)

  }, [sliderRef])


  function handleLeftSlider(sliderElement) {
    const currentScrollLeft = sliderElement.scrollLeft;
    sliderElement.scrollTo({
      left: currentScrollLeft - (sliderElement.clientWidth - (160 - 32)),
      behavior: 'smooth'
    });
  }

  function handleRightSlider(sliderElement) {
    const currentScrollLeft = sliderElement.scrollLeft;
    sliderElement.scrollTo({
      left: currentScrollLeft + (sliderElement.clientWidth - (160 - 32)),
      behavior: 'smooth',
    })
  }


  if (top100MoviesIsLoading) {
    return <p className='text-2xl text-white'>Loading while getting top100Movies...</p>
  }
  if (top100MoviesIsError) {
    return <p className='text-2xl text-white'>Error while getting top100Movies: {top100MoviesError.message}</p>
  }
  return (
    <>
      <div className='relative pl-8 pt-4 pr-8 md:pl-0 md:pt-0 md:pr-0 z-30' >
        {/* {showLeftSlider && ( */}
        <FaChevronLeft
          className='hidden md:block text-white cursor-pointer absolute top-[42%] p-4 rounded-full left-8'
          size={60}
          onClick={() => handleLeftSlider(sliderRef.current)}
        />
        {/* )} */}
        {/* {showRightSlider && ( */}
        <FaChevronRight
          className='hidden md:block text-white  absolute cursor-pointer top-[42%] right-8 p-4 rounded-full'
          size={60}
          onClick={() => handleRightSlider(sliderRef.current)}
        />
        {/* )} */}
        <div className='flex md:pl-20 md:py-10 md:pr-20 overflow-x-auto gap-x-8  scrollbar-none
          ' ref={sliderRef}>
          {
            top100MoviesData?.results?.map((movie, index) => (
              <img key={index} className='shadow-lg shadow-black min-w-full h-[150px] object-center object-cover md:h-[360px] lg:h-[460px] rounded-lg cursor-pointer
              hover:border-4 border-white/80 transition-all ease-in-out duration-100' src={`${base_url_for_getting_image}original${movie?.poster_path ? movie.poster_path : movie?.backdrop_path}`} alt={movie?.title} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default MoviesSlider
