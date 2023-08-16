import SeriesCard from "./SeriesCard"
import axios from "axios"
import { useState,useEffect } from "react"
import LoadingSkeleton from "./Loading"


export default function LatestSeries(){
    const [episode,setEpisode] = useState([])
    const [searchEpisode,setSearchEpisode] = useState("")
    const [loading,setLoading] = useState(true)

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
        getSeries()
    },[])



    return(
       <section className="mt-20 px-8 lg:px-2">
            <h1 className="text-white text-3xl lg:text-xl">Released Latest Episodes</h1>
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
        </section>

    )
}