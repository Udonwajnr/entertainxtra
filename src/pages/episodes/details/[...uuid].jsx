import { useEffect,useState } from "react"
import MovieDescription from "@/components/MovieDescription"
import { useRouter } from "next/router"
import axios from "axios"
import DetailsLoading from "@/components/DetailsLoading"

export default function EpisodeDetails(){
    const router = useRouter()
    const [active, setActive] = useState(false)
    const [episode,setEpisode] = useState([])
    const [searchEpisode,setSearchEpisode] = useState("")
    const [episodeDetails,setEpisodeDetails] = useState([])

    const [loading,setLoading] = useState(true)
    const {uuid} = router.query
    
    const getEPisodesDetails =async()=>{    
        try{
            axios.get(
                // "http://localhost:5000/api/episodes"
                // ||
                `https://api-cnl3.onrender.com/api/episodes/${uuid}`
                )
            .then((res)=>{
                setLoading(false)
                setEpisodeDetails(res?.data.episode)
            })

        }catch(error){
            setLoading(true)
            console.log("couldn't fetch data")
        }
    }

    console.log(episodeDetails)

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
    useEffect(()=>{
        if(!uuid){
            return;
        }
        getEPisodes()
        getEPisodesDetails()
    },[])

    console.log(episode)

    return (
        <>
             <main>
            <div className=''>
                {
                    !loading?
                    episodeDetails.map((moviesDetails,index)=>{
                        return(
                            <MovieDescription key={index} {...moviesDetails} />
                        )
                    })
                    :
                    <DetailsLoading/>
                }
            </div>
        </main>
        </>
    )
}