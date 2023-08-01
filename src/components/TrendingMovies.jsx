import MovieTabBody from "./MovieTabBody"
import MovieTab from "./MovieTabs"
import { useState,useEffect } from "react"

export default function Trending({toggle}){
    const [toggleState, setToggleState] = useState(1);

    useEffect(()=>{
    },[])

    const toggleTab = (index) => {
        setToggleState(index);
    };
    return (
        <section className="mt-10 px-8 lg:px-2">
            <div className="flex justify-start lg:justify-between items-center gap-x-5">
                <h1 className="text-white text-3xl" onClick={toggle}>Trending</h1>
                <MovieTab toggleTab={toggleTab} toggleState={toggleState}/>
            </div>
            <div className="">
                <MovieTabBody toggleTab={toggleTab} toggleState={toggleState}/>
            </div>
        </section>
    )
}