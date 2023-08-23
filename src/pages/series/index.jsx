import {BiFilter} from 'react-icons/bi'
import SeriesCard from "@/components/SeriesCard"
import { useState,useEffect } from 'react'
import SeriesFilter from '@/components/SeriesFilter'
import LoadingSkeleton from '@/components/Loading'
import SeasonalCard from '@/components/SeasonalCard'
import axios from 'axios'

export default function Series(){
    const [active,setActive] = useState('')
    const [loading,setLoading] = useState(true)
    const [seasonal,setSeasonal] = useState([])
    const postPerPage = 30
    const [next ,setNext]=useState(postPerPage) 


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

    const toggle=()=>{
        setActive(!active)
    }

    const handleMoreImage = () => {
        setNext(next + postPerPage);
    };

    return (
        <main>
            <section className='px-8 py-5 lg:px-2'>
                <div className="flex justify-between mt-5">
                    <h2 className="text-white text-3xl">TV Series</h2>
                    <button className="flex gap-x-1 items-center  text-xl border bg-white p-2  rounded-md" onClick={toggle}>
                        <BiFilter size={30}/>
                        Filters
                    </button>
                </div>
            
                <div>
                    {
                        active
                        &&
                        <SeriesFilter/>
                    }
                </div>

            
                <div className="flex justify-center  flex-wrap gap-x-3 gap-y-3 mt-5">
        {
               !loading
                 ?
                    seasonal.slice(0,next).map((seasonal,index)=>{
                        return(
                            <SeasonalCard key={index} {...seasonal}/>
                        )
                    })
                    :                        
                        <LoadingSkeleton/>
                        // count={4}
            }
        </div>
        {
                next<seasonal?.length
                 &&
            <div className="flex justify-center items-center mt-4">
                <button onClick={handleMoreImage} className="text-white bg-rose-600 py-2 px-4 text-lg font-bold hover:bg-rose-700">Load More</button>
            </div>
            }
        
            </section>
        </main>
    )
}