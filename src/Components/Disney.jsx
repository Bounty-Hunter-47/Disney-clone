import MoviesByCategory from './MoviesByCategory.jsx';
import MoviesSlider from './MoviesSlider.jsx';
import Navigation from './Navigation.jsx';
import ProductionHose from './ProductionHose.jsx';

const Disney = () => {

  const MoviesByCategoryFeed = [
    {
      category: 'popular',
      title: 'Popular Movies'
    },
    {
      category: 'top_rated',
      title: 'Top Rated Movies'
    },
    {
      category: 'upcoming',
      title: 'Upcoming Movies'
    }
  ]

  return (
    <>
      <Navigation />
      <main>
        <MoviesSlider />
        <ProductionHose />
        {
          MoviesByCategoryFeed.map((moviesByCategory, index) => {
            return <MoviesByCategory key={index} category={moviesByCategory.category} title={moviesByCategory.title} />
          })
        }
      </main>
    </>
  )
}

export default Disney
