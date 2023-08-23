import SeriesCard from "@/components/SeriesCard"
import axios from "axios"
import {BiFilter} from 'react-icons/bi'
import { useState,useEffect } from "react"
import LoadingSkeleton from "@/components/Loading"
import Filter from "@/components/FIlter"

export default function Episodes(){

    const [active, setActive] = useState(false)
    const [episode,setEpisode] = useState([])
    const [searchEpisode,setSearchEpisode] = useState("")
    const [loading,setLoading] = useState(true)
    const postPerPage = 30
    const [next ,setNext]=useState(postPerPage) 

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

    const toggle =()=>{
        return setActive(!active)
        }

        const handleMoreImage = () => {
            setNext(next + postPerPage);
        };

    useEffect(()=>{
        getEPisodes()
    },[])

    return(
        <section className="mt-20 px-8 lg:px-2">
            <div className="flex justify-between mt-5">
                    <h2 className="text-white text-3xl lg:text-xl">Newly Added Episodes</h2>
                    <button onClick={toggle} className="flex gap-x-1 items-center text-xl border bg-white p-2 lg:p-0.5 rounded-md lg:text-sm">
                        <BiFilter size={25} />
                        Filters
                    </button>
                </div>
            <div>
                    {
                        active
                        &&
                        <Filter/>
                    }
                </div>
            <div className="flex justify-center  flex-wrap gap-x-3 gap-y-3 mt-5">
            {
                   !loading
                     ?
                        episode.slice(0,next).map((episode,index)=>{
                            return(
                                <SeriesCard key={index} {...episode} />
                            )
                        })
                        :                        
                            <LoadingSkeleton/>
                            // count={4}
                }
            </div>
            {
                next < episode?.length
                 &&
            <div className="flex justify-center items-center mt-4">
                <button onClick={handleMoreImage} className="text-white bg-rose-600 py-2 px-4 text-lg font-bold hover:bg-rose-700">Load More</button>
            </div>
            }
        </section>       
    )
}