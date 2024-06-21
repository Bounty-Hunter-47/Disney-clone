// const API_KEY = 'c4282453';

// const url = `https://www.omdbapi.com/?s=marvel&apikey=${API_KEY}`;
// const options = {
//   method: 'GET'
// }

const url = 'https://api.themoviedb.org/3/search/collection?query=disney&include_adult=false&language=en-US&page=1';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTk3YmM3NDM3ZjRiZGJkZGI5NTZiMjU2MDRkMWI2OSIsInN1YiI6IjY2Njk0MDcwNjZkZWQ2ZGJiODFjNzU4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7NiJozC4oYosXduJWzjdQ2KlEy7q4dgajr0lyHrmhRY'
  }
};

const getTop100Movies = async (category) => {
  const response = await fetch(`https://api.themoviedb.org/3/search/collection?query=${category}&include_adult=false&language=en-US&page=1`, options);
  const jsonResponse = await response.json();

  if (!response.ok) {
    throw new Error(jsonResponse?.message);
  }
  return jsonResponse;
}

// const imageConfig = {
//   "images": {
//     "base_url": "http://image.tmdb.org/t/p/",
//     "secure_base_url": "https://image.tmdb.org/t/p/",
//     "backdrop_sizes": [
//       "w300",
//       "w780",
//       "w1280",
//       "original"
//     ]
//   }
// }


export const base_url_for_getting_image = "https://image.tmdb.org/t/p/"
const options__for_movies_by_popularity = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTk3YmM3NDM3ZjRiZGJkZGI5NTZiMjU2MDRkMWI2OSIsInN1YiI6IjY2Njk0MDcwNjZkZWQ2ZGJiODFjNzU4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7NiJozC4oYosXduJWzjdQ2KlEy7q4dgajr0lyHrmhRY'
  }
};

async function getMoviesByCategory(category) {
  const url_for_movies_by_popularity = `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`;
  const moviesByPopularityResponse = await fetch(url_for_movies_by_popularity, options__for_movies_by_popularity);
  if (!moviesByPopularityResponse.ok) {
    throw new Error(`error while fetching movies by popularity`)
  }
  const moviesByPopularityJson = await moviesByPopularityResponse.json();

  return moviesByPopularityJson;
}

export { getMoviesByCategory, getTop100Movies }

