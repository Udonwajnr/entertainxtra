import MovieDescription from "@/components/MovieDescription"
import Link from "next/link"
import {FaPlay} from 'react-icons/fa'

export default function Description(){
    return(
        <main>
            <div className=''>
                {/* video player ending */}
                <MovieDescription/>
            </div>
        </main>
    )
}