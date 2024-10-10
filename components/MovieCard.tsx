import React from 'react'
import Image from 'next/image'

export type MovieCardProps = {
    poster_path: string,
    title: string,
    release_date: string,
}

const MovieCard = ({movie}: {movie: MovieCardProps}) => {

  const url = 'https://image.tmdb.org/t/p/original/'

  return (
    <div className="p-8 flex-col mx-auto items-center">
        <Image  
        src={url + movie.poster_path} 
        alt={movie.title}
        width={200}
        height={200}
        />
    </div>
  )
}

export default MovieCard