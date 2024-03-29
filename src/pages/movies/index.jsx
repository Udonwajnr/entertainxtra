import MovieCard from "@/components/MovieCard"
import {BiFilter} from 'react-icons/bi'
import { useState,useEffect } from "react"
import MovieFilter from "@/components/MovieFilter"
import axios from "axios"
import 'react-loading-skeleton/dist/skeleton.css'
import LoadingSkeleton from "@/components/Loading"
import Filter from "@/components/FIlter"


export default function Movies(){
    const [active, setActive] = useState(false)
    const [movies,setMovies] = useState([])
    const [loading,setLoading] = useState(true)
    const postPerPage = 30
    const [next ,setNext]=useState(postPerPage) 
    const [filterOptions,setFilterOption]= useState(null)
    const [filterYearOption,setFilterYearOption] = useState(null)
    const [filterQualityOption,setFilterQualityOption] = useState("")
    const [country,setCountry] = useState('')

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
    
    const handleMoreImage = () => {
        setNext(next + postPerPage);
    };

    // genre
    const filterOptionsButton=(e)=>{
        const booleanCheckValue = e.target.checked
        const value = e.target.value
        if(booleanCheckValue === true){
            setFilterOption(value)
        }
        else{
            setFilterOption(null)
        }
        
    }   

    const filterYearButton=(e)=>{
        const booleanCheckValue = e.target.checked
        const value = e.target.value
        if(booleanCheckValue === true){
            setFilterYearOption(value)
        }
        else{
            setFilterYearOption(null)
        }
        
    }   
    
    useEffect(()=>{
        getMovies()
    },[])
    console.log(filterYearOption)
    const toggle =()=>{
    return setActive(!active)
    }
    console.log(filterOptions)
    // console.log(movies[0].year)
    return (
        <main className="">
            <section className="px-8 py-5 lg:px-2">
                <div className="flex justify-between mt-5">
                    <h2 className="text-white text-3xl lg:text-xl">Movies</h2>
                    <button onClick={toggle} className="flex gap-x-1 items-center text-xl border bg-white p-2 lg:p-0.5 rounded-md lg:text-sm">
                        <BiFilter size={25} />
                        Filters
                    </button>
                </div>
                <div>
                    {
                        active
                        &&
                        <Filter filterOptionsButton={filterOptionsButton}  filterYearButton={filterYearButton}/>
                    }
                </div>
                <div className="flex justify-center flex-wrap gap-x-3 gap-y-3 mt-5">
                    {
                   !loading
                     ?
                    movies.filter((movie)=>{
                        if(filterOptions === null && filterYearOption === null){
                            return movie
                        }
                        else if(filterOptions){
                           return movie.genre[0].includes(filterOptions) 
                        }
                        // else{
                        //     return (movie.year.includes(filterYearOption) && movie.genre[0].includes(filterOptions)) 
                        // }
                    })?.slice(0,next).map((movie,index)=>{
                            return(
                                <MovieCard key={index} {...movie} movie={movie} />
                            )
                        })
                        :                        
                            <LoadingSkeleton/>
                    }
            </div>
            {
                next < movies?.length
                 &&
            <div className="flex justify-center items-center mt-4">
                <button onClick={handleMoreImage} className="text-white bg-rose-600 py-2 px-4 text-lg font-bold hover:bg-rose-700">Load More</button>
            </div>
            }

            </section>
        </main>
    )
}