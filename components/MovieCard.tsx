import React from 'react'
import Image from 'next/image'
import { MotionDiv } from './MotionDiv'

export type MovieCardProps = {
    poster_path: string,
    title: string,
    release_date: string,
}

const variants = {
  hidden: {opacity: 0},
  visible: {opacity: 1}
}

const MovieCard = ({movie, index}: {index: number, movie: MovieCardProps}) => {

  const url = 'https://image.tmdb.org/t/p/original/'

  return (
    <MotionDiv
    variants={variants}
    initial="hidden"
    animate="visible"
    transition={{
      delay: index * 0.25,
      ease: "easeInOut",
      duration: 0.5
    }}
    className="p-8 flex-col mx-auto items-center relative max-w-64">
        <Image  
        src={url + movie.poster_path} 
        alt={movie.title}
        quality={20}
        width={200}
        height={200}
        priority={index < 10}
        />
        <div className="max-w-fit text-center">
          <h3 className="truncate">{movie.title}</h3>
        </div>
    </MotionDiv>
  )
}

export default MovieCard