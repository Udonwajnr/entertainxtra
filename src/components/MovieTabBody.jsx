import MovieCard from "./MovieCard";
import axios from "axios";
import { useState,useEffect } from "react";
import SeriesCard from "./SeriesCard";
import LoadingSkeleton from "./Loading";
// import LoadingSkeleton from "./Loading";


export default function MovieTabBody({toggleTab, toggleState}){
    const [active, setActive] = useState(false)
    const [movies,setMovies] = useState([])
    const [loading,setLoading] = useState(true)

    const [episode,setEpisode] = useState([])
    const [searchEpisode,setSearchEpisode] = useState("")



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

    const getSeries =async()=>{    

        try{
            axios.get(
                // "http://localhost:5000/api/episodes"
                // ||
                "https://api-cnl3.onrender.com/api/episodes"
                )
            .then((res)=>{
                setEpisode(res.data.episodes)
                setLoading(false)
            })

        }catch(error){
            setLoading(true)
            console.log("couldn't fetch data")
        }
    }


    useEffect(()=>{
        getMovies()
        getSeries()

    },[])
    
    return(
        <>
            {/* tabs */}
                <div className="content-tabs mt-4">
                    <div
                    className={toggleState === 1 ? " content active-content bg-green-400 " : " content"}
                    
                    >
                        {/* movies */}
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
                    </div>

                    <div
                    className={toggleState === 2 ? " content  active-content" : "content"}
                    >
                        {/* series */}
                        <div className="flex justify-center  flex-wrap gap-x-3 gap-y-3 mt-5">
                        {
                          !loading
                                     ?
                               episode.map((episode,index)=>{
                            return(
                                <SeriesCard key={index} {...episode} />
                             )
                         })
                        :                        
                            <LoadingSkeleton/>
                            // count={4}
                }

                        </div>
                    </div>
                </div>
        </>
    )
}