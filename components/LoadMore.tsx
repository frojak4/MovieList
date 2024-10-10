'use client'
import { fetchMovies } from '@/app/actions'
import React, { useEffect, useState } from 'react'
import {useInView} from 'react-intersection-observer'
import MovieCard, { MovieCardProps } from './MovieCard'
const LoadMore = () => {
    const { ref, inView } = useInView()
    const [index, setIndex] = useState(2);
    const [data, setData] = useState<MovieCardProps[]>([])

    useEffect(() => {
        if (inView){
            fetchMovies(index)
            .then((res) => 
            setData([...data, ...res]))
            .catch((err) => console.log(err))

            console.log('in view')
            setIndex((prev) => prev + 1);
        }
    }, [inView])
    
  return (
    
    <div>
        <div className="flex flex-wrap">
      {data.map((movie: MovieCardProps, i: number) => {
        return <MovieCard movie={movie} key={i} />
      })}
      </div>

        <div ref={ref}>Loading...</div>
    </div>
  )
}

export default LoadMore