import MovieCard from "./MovieCard"
import LoadingSkeleton from "@/components/Loading"
import axios from "axios"
import { useState,useEffect } from "react"

export default function LatestMovies(){
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


    return (
        <section className=" mt-20 px-8 lg:px-2">
            <h1 className="text-white text-3xl lg:text-xl">Latest Movies</h1>
            <div className="flex justify-center  flex-wrap gap-x-3 gap-y-3 mt-5">
                    {
                   !loading
                     ?
                        movies.slice(0,30).map((movie,index)=>{
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
    )
}