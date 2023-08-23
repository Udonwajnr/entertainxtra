import { useEffect, useState } from "react"
import MovieCard from "./MovieCard"
import LoadingSkeleton from "./Loading"
import axios from "axios"
import SeriesCard from "./SeriesCard"
import SeasonalCard from "./SeasonalCard"
import MovieSearchCard from "./MovieSearchCard"
import SeasonalSearchCard from "./SeasonalSearchCard"
import EpisodeSearchCard from "./EpisodeSearchCard"


export default function SearchDetails({search,setSearch}){

    const [movies,setMovies] = useState([])
    const [episode,setEpisode] = useState([])
    const [seasonal,setSeasonal] = useState([])

    const [loading,setLoading] = useState(true)

    

    const getMovies =async()=>{
        try{
            await axios.get("https://api-cnl3.onrender.com/api/movies")
            .then((res)=>{
                setLoading(false)
                setMovies(res?.data?.movie)
                console.log(movies)
            })
        }catch(error){
            console.log("couldn't fetch data")
        }
    }


    const getEPisodes =async()=>{    

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

    const getSeasonal =async()=>{    
        try{
        axios.get("https://api-cnl3.onrender.com/api/seasonal")
        .then((res)=>{
                setLoading(false)
                setSeasonal(res.data.seasonal)            
         })
        }catch(error){
            console.log("couldn't fetch data")
            setLoading(true)
        }
    }


    useEffect(()=>{
        getMovies()
        getEPisodes()
        getSeasonal()
    },[])

    return(
        <section>
            <main>
                <div className="flex border justify-center items-center xl:gap-x-4">
                    <div>
                        <div className="text-white">
                            <h2>Movie</h2>  
                        </div>

                        <div className="flex justify-center flex-col flex-wrap gap-x-3 gap-y-3 mt-5">
                    {
                   
                    movies?.filter((movie)=>{
                        if(search == ""){
                            return 
                        }else if(movie.title.toLowerCase().includes(search.toLowerCase())){
                            return movie
                        }
                    })?.slice(0,4).map((movie,index)=>{
                            return(
                                <MovieSearchCard  key={index} {...movie}/>
                            )
                        })
                        
                    }
                    </div>
                   
                    </div>


                    <div>
                        <div className="text-white">
                            <h2 >
                                Episode
                            </h2>
                        </div>

                        <div className="flex justify-center flex-col  flex-wrap gap-x-3 gap-y-3 mt-5">
            {
                        episode?.filter((episode)=>{
                            if(search == ""){
                                return 
                            }else if(episode.title.toLowerCase().includes(search.toLowerCase()) || episode.language.toLowerCase().includes(search.toLowerCase()) || episode.genre.toString().toLowerCase().includes(search.toLowerCase()) || episode.year.toString().toLowerCase().includes(search.toLowerCase()) || episode.seasonal.title.toString().toLowerCase().includes(search.toLowerCase()) ){
                                return episode
                            }
                        }).slice(0,4).map((episode,index)=>{
                            return(
                                <EpisodeSearchCard key={index} {...episode}/>
                            )
                        })
                        
                }
            </div>
                        </div>


                    <div>
                        <div className="text-white">
                            <h2>Seasonal</h2>
                        </div>

                            <div className="flex justify-center flex-col flex-wrap gap-x-3 gap-y-3 mt-5">
                                {

                                            seasonal?.filter((seasonal)=>{
                                                if(search == ""){
                                                    return
                                                }else if(seasonal.title.toLowerCase().includes(search.toLowerCase()) || seasonal.language.toLowerCase().includes(search.toLowerCase()) || seasonal.genre.toString().toLowerCase().includes(search.toLowerCase()) || seasonal.year.toLowerCase().includes(search.toLowerCase())){
                                                    return seasonal
                                                }
                                            }).slice(0,7).map((seasonal,index)=>{
                                                return(
                                                    <>
                                                    <SeasonalSearchCard key={index} {...seasonal}/>
                                                    </>
                                                )
                                            })
                                            
                                    }
                                </div>
                    </div>

                </div>
            </main>
        </section>
    )
}