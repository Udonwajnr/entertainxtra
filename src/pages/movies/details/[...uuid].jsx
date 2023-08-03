import { useEffect,useState } from "react"
import MovieDescription from "@/components/MovieDescription"
import { useRouter } from "next/router"
import axios from "axios"
import DetailsLoading from "@/components/DetailsLoading"

export default function Description(){
    const [moviesDetails,setMovieDetails] = useState([])
    const [movie,setMovie]  = useState([])
    const [loading,setLoading] = useState(true)
    const router = useRouter()
    const {uuid} = router.query


    const getMoviesDetails =async()=>{
        try{
            await axios.get(`https://api-cnl3.onrender.com/api/movies/${uuid}`)
            .then((res)=>{
                setLoading(false)
                setMovieDetails(res?.data?.movies)
            })
        }catch(error){
            console.log("couldn't fetch data")
        }
    }

    const getMovies=async()=>{
        try{
            await axios.get(`https://api-cnl3.onrender.com/api/movies`)
            .then((res)=>{
                setMovie(res?.data?.movie)
            })
        }catch(error){
            console.log("couldn't fetch data")
        }
    }

    useEffect(()=>{
        if(!uuid){
            return;
        }
        else{
            getMoviesDetails()
            getMovies()
        }
    },[uuid])
    return(
        <main>
            <div className=''>
                {/* video player ending */}
                {
                    !loading?
                    moviesDetails.map((moviesDetails,index)=>{
                        return(
                            <MovieDescription key={index} {...moviesDetails} movie={movie}/>
                        )
                    })
                    :
                    <DetailsLoading/>
                }
            </div>
        </main>
    )
}