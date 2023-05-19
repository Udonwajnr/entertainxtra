import LatestMovies from '@/components/LatestMovies'
import MovieHero from '@/components/MovieHero'
import Trending from '@/components/TrendingMovies'
import LatestSeries from '@/components/LatestSeries'
import { useState } from 'react'

export default function Home() {
 const [active,setActive] = useState(false)
  
  function toggle(){
    setActive(!active);
  }

  return (
    <main className=" min-h-screen ">
      <MovieHero/>
      <Trending toggle={toggle}/>
      <LatestMovies/>
      <LatestSeries/>
    </main>
  )
}
