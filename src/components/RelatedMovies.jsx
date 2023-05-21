import MovieCard from "./MovieCard"
import SeriesCard from "./SeriesCard"
export default function RelatedMovies(){
    return(
    <section className="py-5">
        <div className=' mt-8 px-10 lg:px-2'>
            <div className='mt-4'>
                <h2 className='text-3xl text-white'>Related Movies</h2>
            </div>
            <div className="grid grid-cols-fluid gap-4 md:grid-cols-2 mt-5">
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