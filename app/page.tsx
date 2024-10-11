
import MovieCard, { MovieCardProps } from '@/components/MovieCard';
import { fetchMovies } from './actions';
import LoadMore from '@/components/LoadMore';

export default async function Home() {

  const data = await fetchMovies(1);
  console.log(data)
  return (
    <div className="w-4/6 mx-auto flex flex-col">
      <div className="flex flex-wrap">
      {data.map((movie: MovieCardProps, i: number) => {
        return <MovieCard movie={movie} index={i} key={i} />
      })}
      </div>
      <LoadMore/>
    </div>
  );
}
