import {BiFilter} from 'react-icons/bi'
import SeriesCard from "@/components/SeriesCard"
import { useState } from 'react'
import SeriesFilter from '@/components/SeriesFilter'

export default function Series(){
    const [active,setActive] = useState('')

    const toggle=()=>{
        setActive(!active)
    }
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

            
                <div className="grid grid-cols-fluid  gap-5 mt-5">
                <SeriesCard/>
                <SeriesCard/>
                <SeriesCard/>
                <SeriesCard/>
                <SeriesCard/>
                <SeriesCard/>
                <SeriesCard/>
                <SeriesCard/>
                </div>
            </section>
        </main>
    )
}