import MovieCard from "./MovieCard"
export default function LatestMovies(){
    return (
        <section className=" mt-20 px-8 lg:px-2">
            <h1 className="text-white text-3xl">Latest Movies</h1>
            <div className="grid grid-cols-fluid gap-4 sm:grid-cols-2 mt-5">
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
    )
}