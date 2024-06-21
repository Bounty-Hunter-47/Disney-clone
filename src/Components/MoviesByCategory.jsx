import { useQuery } from '@tanstack/react-query'
import React, { useRef } from 'react'
import { getMoviesByCategory, base_url_for_getting_image } from '../APIs/getTop100Movies'
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";


const MoviesByCategory = ({ category, title }) => {

  const {
    data: popularMoviesData,
    isError: popularMoviesIsError,
    isLoading: popularMoviesIsLoading,
    error: popularMoviesError
  } = useQuery({
    queryKey: ['popularMovies', { category: category }],
    queryFn: () => getMoviesByCategory(category)
  })

  const SCREEN_WIDTH = window.innerWidth;
  const sliderRef = useRef();

  function handleLeftSlider(element) {
    element.scrollLeft -= element.clientWidth - (96 + 32);
  }

  function handleRightSlider(element) {
    element.scrollLeft += SCREEN_WIDTH - (96 + 32);
  }


  if (popularMoviesIsLoading) {
    return <div>Loading...</div>
  }
  if (popularMoviesIsError) {
    return <div>{popularMoviesError.message}</div>
  }

  return (
    <div className='pt-8 relative '>
      <h1 className='text-white md:px-20 px-8 pb-4 md:text-3xl text-xl font-sans font-extrabold'>{title}</h1>
      <FaChevronLeft className='hidden z-30 md:block text-white bg-black/70 hover:bg-black/50 cursor-pointer absolute top-[50%] p-4 rounded-full left-14' size={60}
        onClick={() => handleLeftSlider(sliderRef.current)} />
      <FaChevronRight className='hidden z-30 md:block text-white  bg-black/70 hover:bg-black/50 absolute cursor-pointer top-[50%] right-14 p-4 rounded-full' size={60}
        onClick={() => handleRightSlider(sliderRef.current)} />
      <div ref={sliderRef} className='flex scroll-smooth scrollbar-none overflow-x-auto md:px-24 md:pb-6 px-8 md:h-[600px] h-[200px] md:gap-x-8 gap-x-4 items-center'>
        {
          popularMoviesData.results.map((movie, index) => (
            <img key={index} className='md:min-w-[40%] lg:min-w-[26%] min-w-[40%] h-full cursor-pointer object-cover object-top rounded-lg
            shadow-lg transition-all duration-40 ease-in-out shadow-black hover:border-2 border-white' src={`${base_url_for_getting_image}original${movie?.poster_path ? movie.poster_path : movie?.backdrop_path}`} alt={movie.title} />
          ))
        }
      </div>
    </div>
  )
}

export default MoviesByCategory
