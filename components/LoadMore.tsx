'use client'
import { fetchMovies } from '@/app/actions'
import React, { useEffect, useState } from 'react'
import {useInView} from 'react-intersection-observer'
import MovieCard, { MovieCardProps } from './MovieCard'
import {CircleLoader} from 'react-spinners'
import axios from 'axios'
const LoadMore = () => {

    const { ref, inView } = useInView()
    const [index, setIndex] = useState(2);
    const [data, setData] = useState<MovieCardProps[]>([])
    const [restOfData, setRestOfData] = useState<MovieCardProps[]>([])

    useEffect(() => {

        if (inView){
          if (restOfData.length === 0){
          fetchMovies(index).then((res) => {
            const firstHalf = res.slice(0, 10)
            const secondHalf = res.slice(10, 20)
            console.log(res)
            setData([...data, ...firstHalf])
            setRestOfData([secondHalf]);
          })
          
            setIndex((prev) => prev + 1);
          } else {
            loadEvenMore();
          }
        
        }
    }, [inView])


    
    const loadEvenMore = () => {
      setData([...data, ...restOfData]);
      setRestOfData([]);
    }

  return (
    
    <div>
        <div className="flex flex-wrap">
      {data.map((movie: MovieCardProps, i: number) => {
        return <MovieCard movie={movie} index={i} key={i} />
      })}
      </div>
        <div ref={ref} className='mx-auto text-white'>
        <CircleLoader className="text-white" />
        </div>
    </div>
  )
}

export default LoadMore