'use server'


const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.API_KEY}`}
    }

export const fetchMovies = async(page: number) => {
      const response = await fetch(`https://api.themoviedb.org/3/movie/popular?limit=8?language=en-US&page=${page}`, options)

      const data = await response.json();
      return data.results;
}