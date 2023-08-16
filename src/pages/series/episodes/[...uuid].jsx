import { useEffect,useState } from "react"
import { useRouter } from "next/router"
import axios from "axios"
import SeriesCard from "@/components/SeriesCard"
import DetailsLoading from "@/components/DetailsLoading"
import LoadingSkeleton from "@/components/Loading"
import MovieDescription from "@/components/MovieDescription"
import SeasonalDetails from "@/components/SeasonalDescription"

export default function SeasonalEpisodes(){
    const [episode,setEpisode] = useState([])
    const [seasonalDetail,setSeasonalDetail] = useState([])
    const [movie,setMovie]  = useState([])
    const [loading,setLoading] = useState(true)
    const router = useRouter()
    const {uuid} = router.query


    const getSeasonalEpisodes = async()=>{
        try{
            await axios.get(`https://api-cnl3.onrender.com/api/seasonal/${uuid}`)
            .then((res)=>{
                setLoading(false)
                setEpisode(res?.data?.seasonal[0]?.episode)
                setSeasonalDetail(res?.data?.seasonal)
            })
        }catch(error){
            console.log("couldn't fetch data")
        }
    }
    useEffect(()=>{
        getSeasonalEpisodes()
    },[])
    console.log(seasonalDetail)

    return (
        <section className="mt-20 px-8 lg:px-2">

                <div className=''>
                {
                    !loading?
                    seasonalDetail.map((seasonalDetail,index)=>{
                        return(
                            <>
                                <SeasonalDetails key={index} {...seasonalDetail}/>
                            </>
                        )
                    })
                    :
                    <DetailsLoading/>
                }
            </div>

            <h1 className="text-white text-3xl lg:text-xl">Episodes</h1>
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