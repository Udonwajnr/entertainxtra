import MovieCard from "@/components/MovieCard"
import {BiFilter} from 'react-icons/bi'
import { useState,useEffect } from "react"
import MovieFilter from "@/components/MovieFilter"
import axios from "axios"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import LoadingSkeleton from "@/components/Loading"

export default function Movies(){
    const [active, setActive] = useState(false)
    const [movies,setMovies] = useState([])
    const [loading,setLoading] = useState(true)

    const getMovies =async()=>{
        try{
            await axios.get("https://api-cnl3.onrender.com/api/movies")
            .then((res)=>{
                setLoading(false)
                setMovies(res?.data?.movie)
            })
        }catch(error){
            console.log("couldn't fetch data")
        }
    }

    useEffect(()=>{
        getMovies()
    },[])

    const toggle =()=>{
    return setActive(!active)
    }
    return (
        <main className="">
            <section className="px-8 py-5 lg:px-2">
                <div className="flex justify-between mt-5">
                    <h2 className="text-white text-3xl lg:text-xl">Movies</h2>
                    <button onClick={toggle} className="flex gap-x-1 items-center text-xl border bg-white p-2 rounded-md lg:text-base">
                        <BiFilter size={30} />
                        Filters
                    </button>
                </div>
                <div>
                    {
                        active
                        &&
                        <MovieFilter/>
                    }
                </div>
                <div className="flex justify-start gap-x-3 gap-y-3 flex-wrap lg:justify-around mt-5">
                    {
                    !loading
                     ?
                        movies.map((movie,index)=>{
                            return(
                                <MovieCard key={index} {...movie} movie={movie} />
                            )
                        })
                        :                        
                            <LoadingSkeleton/>
                            // count={4}
                    }
                </div>
            </section>
        </main>
    )
}