import MovieCard from "./MovieCard"
import SeriesCard from "./SeriesCard"
export default function RelatedMovies(){
    return(
    <section>

        <div className=' mt-8 px-10'>
        <div className='mt-4'>
            <h2 className='text-3xl text-white'>Related Movies</h2>
        </div>
        <div className="w-full p-2 flex-wrap gap-4  mt-4 flex  justify-start">
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <SeriesCard/>
            <SeriesCard/>
            <SeriesCard/>
            <SeriesCard/>
            <SeriesCard/>
        </div>
    </div>

    </section>
    )
}