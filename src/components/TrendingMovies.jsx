import MovieCard from "./MovieCard"
import MovieTabBody from "./MovieTabBody"
import MovieTab from "./MovieTabs"
import { useState } from "react"
import {BsPlayCircle,BsListUl} from 'react-icons/bs'


export default function Trending({toggle}){
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    return (
        <section className="mt-20 px-8 lg:px-2">
            <div className="flex items-center gap-x-2">
                <h1 className="text-white text-3xl" onClick={toggle}>Trending</h1>
                <MovieTab toggleTab={toggleTab} toggleState={toggleState}/>
            </div>
            <div className="">
                <MovieTabBody toggleTab={toggleTab} toggleState={toggleState}/>

            </div>
        </section>
    )
}