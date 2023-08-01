import MovieCard from "@/components/MovieCard"
import {BiFilter} from 'react-icons/bi'
import { useState,useEffect } from "react"
import MovieFilter from "@/components/MovieFilter"
import axios from "axios"

export default function Movies(){
    const [active, setActive] = useState(false)
    const [movies,setMovies] = useState([])
    const [done,setDone] = useState(false)

    const getMovies =async()=>{
        try{
            await axios.get("https://api-cnl3.onrender.com/api/movies")
            .then((res)=>{
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
        <main>
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
                <div className="flex justify-start space-x-3 flex-wrap">
                    {
                        movies.map((movie,index)=>{
                            return(
                                <MovieCard key={index} {...movie} movie={movie} />
                            )
                        })
                    }
                </div>
            </section>
        </main>
    )
}