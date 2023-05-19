import MovieCard from "@/components/MovieCard"
import {BiFilter} from 'react-icons/bi'
import { useState } from "react"
import MovieFilter from "@/components/MovieFilter"

export default function Movies(){
    const [active, setActive] = useState(false)

    const toggle =()=>{
    return setActive(!active)
    }

    return (
        <main>
            <section className="px-8 py-5 lg:px-2">
                <div className="flex justify-between mt-5">
                    <h2 className="text-white text-3xl lg:text-xl">Movies</h2>
                    <button onClick={toggle} className="flex gap-x-1 items-center text-xl border bg-white p-2 rounded-md lg:text-base">
                        <BiFilter size={30} />
                        Filters
                    </button>
                </div>
                <div>
                    {
                        active
                        &&
                        <MovieFilter/>
                    }
                </div>
                <div className="grid grid-cols-fluid  gap-5 mt-5">
                    <MovieCard/>
                    <MovieCard/>
                    <MovieCard/>
                    <MovieCard/>
                    <MovieCard/>
                    <MovieCard/>
                    <MovieCard/>
                    <MovieCard/>
                    <MovieCard/>
                    <MovieCard/>
                    <MovieCard/>

                </div>
            </section>
        </main>
    )
}