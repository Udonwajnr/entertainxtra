import MovieCard from "./MovieCard"
import SeriesCard from "./SeriesCard"
export default function RelatedMovies({genre,movie}){

    return(
    <section className="py-5">
        <div className=' mt-8 px-10 lg:px-2'>
            <div className='mt-4'>
                <h2 className='text-3xl text-white text-center'>Related Movies</h2>
            </div>
            <div className="flex justify-start gap-x-3 gap-y-3 flex-wrap lg:justify-around mt-5">
                {
                    movie?.filter((movie)=>{
                        return movie.genre[0].includes(" Action") == genre[0].includes(" Action")
                    })?.map((movie)=>{
                     return(
                         <MovieCard key={movie.uuid} {...movie} />
                     )   
                    })
                }
                {/* <SeriesCard/> */}
                {/* <SeriesCard/>
                <SeriesCard/>
                <SeriesCard/>
                <SeriesCard/> */}
            </div>
        </div>
    </section>
    )
}
