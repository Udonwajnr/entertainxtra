import { useEffect,useState } from "react"
import { useRouter } from "next/router"
import axios from "axios"
import SeriesCard from "@/components/SeriesCard"
import LoadingSkeleton from "@/components/Loading"

export default function SeasonalEpisodes(){
    const [episode,setEpisode] = useState([])
    const [movie,setMovie]  = useState([])
    const [loading,setLoading] = useState(true)
    const router = useRouter()
    const {uuid} = router.query

    // console.log(uuid)/
    
    const getSeasonalEpisodes = async()=>{
        try{
            await axios.get(`https://api-cnl3.onrender.com/api/seasonal/${uuid}`)
            .then((res)=>{
                setLoading(false)
                setEpisode(res?.data?.seasonal[0]?.episode)
            })
        }catch(error){
            console.log("couldn't fetch data")
        }
    }
    useEffect(()=>{
        getSeasonalEpisodes()
    },[])


    return (
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
                }
            </div>
        </section>
    )

}