import SeriesCard from "./SeriesCard"
import axios from "axios"
import { useState,useEffect } from "react"
import LoadingSkeleton from "./Loading"
import SeasonalCard from "./SeasonalCard"
import Link from "next/link"

export default function LatestSeasonal(){
    const [loading,setLoading] = useState(true)
    const [seasonal,setSeasonal] = useState([])
    const [searchSeasonal,setSearchSeasonal] = useState("")

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
        getSeasonal()
    },[])

    return(
        <section className="mt-20 px-8 lg:px-2">
        <h1 className="text-white text-3xl lg:text-xl">Latest Seasonal</h1>
        <div className="flex justify-center  flex-wrap gap-x-3 gap-y-3 mt-5">
        {
               !loading
                 ?
                    seasonal.slice(0,30).map((seasonal,index)=>{
                        return(
                            <SeasonalCard key={index} {...seasonal}/>
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